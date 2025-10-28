import React, { useEffect, useState, useRef } from "react";
import './Edit.css';
import { useAdmin } from '../auth/AdminContext';
import { getContent, updateContent } from '../services/api';

function parseBBCode(text) {
  // Bold, italics, alleviivattu teksti
  text = text.replace(/\[b\](.*?)\[\/b\]/gi, '<strong>$1</strong>');
  text = text.replace(/\[i\](.*?)\[\/i\]/gi, '<em>$1</em>');
  text = text.replace(/\[u\](.*?)\[\/u\]/gi, '<u>$1</u>');
  // URL
  text = text.replace(/\[url=(.+?)\](.+?)\[\/url\]/gi, '<a href="$1" target="_blank" rel="noopener noreferrer">$2</a>');
  text = text.replace(/\[url\](.+?)\[\/url\]/gi, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
  // Kuva
  text = text.replace(/\[img\](.+?)\[\/img\]/gi, '<img src="$1" alt="" style="max-width:100%;" />');
  // Väri
  text = text.replace(/\[color=(.+?)\](.*?)\[\/color\]/gi, '<span style="color:$1;">$2</span>');
  // Koko
  text = text.replace(/\[size=(\d+)\](.*?)\[\/size\]/gi, '<span style="font-size:$10px;">$2</span>');
  // Suunnat
  text = text.replace(/\[center\]([\s\S]*?)\[\/center\]/gi, '<div style="text-align:center;">$1</div>');
  text = text.replace(/\[right\]([\s\S]*?)\[\/right\]/gi, '<div style="text-align:right;">$1</div>');
  // Columnit
  text = text.replace(
    /\[columns\]([\s\S]*?)\[\/columns\]/gi,
    (match, content) => {
      const columns = content.split(/\[nextcol\]/gi).map(colContent =>
        `<div class="bbcode-column">${colContent.trim()}</div>`
      );
      return `<div class="bbcode-columns">${columns.join("")}</div>`;
    }
  );
  // Fontit
  text = text.replace(/\[font=(.+?)\](.*?)\[\/font\]/gi, '<span style="font-family:$1;">$2</span>');
  text = text.replace(/\n/g, '<br />');

  return text;
}

const Edit = ({ title, contentKey, value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bbcode, setBBCode] = useState(value || "");
  const textareaRef = useRef(null);
  const { isAdmin, token } = useAdmin();

  // Hae sisältö palvelimelta, jos avain annettu
  useEffect(() => {
    let mounted = true;
    if (contentKey) {
      getContent(contentKey)
        .then((data) => {
          if (mounted) {
            const body = data?.body || "";
            setBBCode(body);
            if (onChange) onChange(body);
          }
        })
        .catch(() => {});
    }
    return () => { mounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentKey]);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = async () => {
    setIsEditing(false);
    if (contentKey) {
      try {
        await updateContent(contentKey, bbcode, token);
      } catch (e) {
        // voidaan näyttää virhe, mutta pidetään hiljaisena nyt
      }
    }
    if (onChange) onChange(bbcode);
  };

  // Lisää tägin
  const insertTag = (openTag, closeTag = "") => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = bbcode.substring(0, start);
    const after = bbcode.substring(end);
    const newValue = before + openTag + closeTag + after;
    setBBCode(newValue);

    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = start + openTag.length;
    }, 0);
  };
  
  return (
    <div>
      <h1>
        {title}
        {isAdmin && (
          <button style={{ marginLeft: "1em" }} onClick={handleEditClick}>
            Muokkaa
          </button>
        )}
      </h1>
      {isAdmin && isEditing ? (
        <div>
          {/* BBCode täginapit */}
          <div className="buttons">
            <button onClick={() => insertTag("[b]", "[/b]")}>Paksu</button>
            <button onClick={() => insertTag("[i]", "[/i]")}>Italics</button>
            <button onClick={() => insertTag("[u]", "[/u]")}>Alleviivaus</button>
            <button onClick={() => insertTag("[url=]", "[/url]")}>URL</button>
            <button onClick={() => insertTag("[img]", "[/img]")}>Kuva</button>
            <button onClick={() => insertTag("[color=]", "[/color]")}>Väri</button>
            <button onClick={() => insertTag("[size=]", "[/size]")}>Koko</button>
            <button onClick={() => insertTag("[columns]", "[/columns]")}>Column</button>
            <button onClick={() => insertTag("[nextcol]")}>Nextcol</button>
            <button onClick={() => insertTag("[center]", "[/center]")}>Keski</button>
            <button onClick={() => insertTag("[right]", "[/right]")}>Oikea</button>
            <button onClick={() => insertTag("[font=]", "[/font]")}>Fontti</button>
          </div>
          <textarea
            ref={textareaRef}
            value={bbcode}
            onChange={e => setBBCode(e.target.value)}
            rows={8}
            style={{ width: "100%" }}
          />
          <button className="save-button" onClick={handleSaveClick}>Tallenna</button>
          <div className="esikatselu">
            <strong>Esikatselu:</strong>
            <div dangerouslySetInnerHTML={{ __html: parseBBCode(bbcode) }} />
          </div>
        </div>
      ) : (
        <div className="infobox" dangerouslySetInnerHTML={{ __html: parseBBCode(bbcode) }} />
      )}
    </div>
  );
};

export default Edit;