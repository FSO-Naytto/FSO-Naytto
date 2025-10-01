import React, { useState } from "react";

const Edit = ( {title, value, onChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);

    // Kun Muokkaa -nappi klikkaa, siirtyy muokkaustilaan
    const handleEditClick = () => setIsEditing(true);

    // Tallentaa muutokset
    const handleSaveClick = () => {
        setIsEditing(false);
        onChange(tempValue);
    };

    return (
        <div>
            <h1>
                {title}
                {/* Muokkausnappi*/}
                <button style={{ marginLeft: "1em" }} onClick={handleEditClick}>
                    Muokkaa
                </button>
            </h1>
            {isEditing ? (
                <div>
                    {/* Tekstikenttä*/}
                    <textarea
                        value={tempValue}
                        onChange={e => setTempValue(e.target.value)}
                        rows={4}
                        style={{ 
                            width: "100%", 
                            maxWidth: "100%",
                            boxSizing: "border-box",
                            resize: "vertical",
                            wordWrap: "break-word",
                            overflowWrap: "break-word"
                        }}
                    />
                    {/* Tallennusnappi */}
                    <button onClick={handleSaveClick}>Tallenna</button>
                </div>
            ) : (
                <p style={{ 
                    whiteSpace: "pre-line",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    maxWidth: "100%"
                }}>{value}</p>
            )}
        </div>
    );
};

export default Edit;