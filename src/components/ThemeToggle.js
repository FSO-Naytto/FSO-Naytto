import React, { useEffect, useState } from "react";
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [light, setLight] = useState(true);

    useEffect(() => {
        document.body.className = light ? "light-mode" : "dark-mode";
    }, [light]);

    return (
        <div className="theme-toggle-container">
            <button className="theme-toggle" onClick={() => setLight(l => !l)}>
                {light ? "Tumma teema" : "Vaalea teema"}
            </button>
        </div>
    );
};

export default ThemeToggle;