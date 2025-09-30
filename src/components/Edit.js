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
                        style={{ width: "100%" }}
                    />
                    {/* Tallennusnappi */}
                    <button onClick={handleSaveClick}>Tallenna</button>
                </div>
            ) : (
                <p style={{ whiteSpace: "pre-line" }}>{value}</p>
            )}
        </div>
    );
};

export default Edit;