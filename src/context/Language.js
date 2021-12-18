import { createContext, useState } from "react";

export const Language = createContext({});

export const LanguageProvider = ({ children }) => {
  const [english, setEnglish] = useState(false);
  return (
    <Language.Provider value={{ english, setEnglish }}>
      {children}
    </Language.Provider>
  );
};
