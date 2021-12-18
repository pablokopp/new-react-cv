import { Language } from "../context/Language";
import React from "react";
import { useContext } from "react";

const LanguageChanger = () => {
  const { english, setEnglish } = useContext(Language);
  const change = () => setEnglish(!english);
  return (
    <div>
      <button className="languageChanger" onClick={change}>
        {english ? "ES 🌐" : "EN 🌐"}
      </button>
    </div>
  );
};

export default LanguageChanger;
