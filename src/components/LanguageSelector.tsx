import React from "react";

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const languages = [
  { code: "en", native: "English", flag: "🇬🇧" },
  { code: "ta", native: "தமிழ்", flag: "🇮🇳" },
  { code: "hi", native: "हिंदी", flag: "🇮🇳" },
  { code: "te", native: "తెలుగు", flag: "🇮🇳" },
];

export function LanguageSelector({
  currentLanguage,
  onLanguageChange,
}: LanguageSelectorProps) {
  return (
    <div className="flex gap-3 items-center bg-white/70 px-4 py-2 rounded-xl shadow-md backdrop-blur-md">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`
            flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium transition-all duration-200
            ${
              currentLanguage === lang.code
                ? "bg-green-600 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          <span className="text-lg">{lang.flag}</span>
          <span>{lang.native}</span>
        </button>
      ))}
    </div>
  );
}
