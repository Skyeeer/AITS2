import React from 'react';

interface LanguageSelectorProps {
    targetLanguage: string;
    setTargetLanguage: (language: string) => void;
}

interface LanguageOption {
    name: string;
    code: string;
}

const languages: LanguageOption[] = [
    { name: 'Afrikaans', code: 'af' },
    { name: 'Albanian', code: 'sq' },
    { name: 'Amharic', code: 'am' },
    { name: 'Arabic', code: 'ar' },
    { name: 'Armenian', code: 'hy' },
    { name: 'Azerbaijani', code: 'az' },
    { name: 'Basque', code: 'eu' },
    { name: 'Bengali', code: 'bn' },
    { name: 'Bosnian', code: 'bs' },
    { name: 'Bulgarian', code: 'bg' },
    { name: 'Burmese', code: 'my' },
    { name: 'Catalan', code: 'ca' },
    { name: 'Chinese (Mandarin)', code: 'zh' },
    { name: 'Croatian', code: 'hr' },
    { name: 'Czech', code: 'cs' },
    { name: 'Danish', code: 'da' },
    { name: 'Dutch', code: 'nl' },
    { name: 'English', code: 'en' },
    { name: 'Estonian', code: 'et' },
    { name: 'Finnish', code: 'fi' },
    { name: 'French', code: 'fr' },
    { name: 'Galician', code: 'gl' },
    { name: 'Georgian', code: 'ka' },
    { name: 'German', code: 'de' },
    { name: 'Greek', code: 'el' },
    { name: 'Hebrew', code: 'he' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Hungarian', code: 'hu' },
    { name: 'Icelandic', code: 'is' },
    { name: 'Indonesian', code: 'id' },
    { name: 'Italian', code: 'it' },
    { name: 'Japanese', code: 'ja' },
    { name: 'Javanese', code: 'jv' },
    { name: 'Kannada', code: 'kn' },
    { name: 'Korean', code: 'ko' },
    { name: 'Lao', code: 'lo' },
    { name: 'Latvian', code: 'lv' },
    { name: 'Lithuanian', code: 'lt' },
    { name: 'Macedonian', code: 'mk' },
    { name: 'Malay', code: 'ms' },
    { name: 'Malayalam', code: 'ml' },
    { name: 'Marathi', code: 'mr' },
    { name: 'Mongolian', code: 'mn' },
    { name: 'Nepali', code: 'ne' },
    { name: 'Norwegian', code: 'no' },
    { name: 'Persian', code: 'fa' },
    { name: 'Polish', code: 'pl' },
    { name: 'Portuguese', code: 'pt' },
    { name: 'Punjabi', code: 'pa' },
    { name: 'Romanian', code: 'ro' },
    { name: 'Russian', code: 'ru' },
    { name: 'Serbian', code: 'sr' },
    { name: 'Sinhala', code: 'si' },
    { name: 'Slovak', code: 'sk' },
    { name: 'Slovenian', code: 'sl' },
    { name: 'Spanish', code: 'es' },
    { name: 'Swahili', code: 'sw' },
    { name: 'Swedish', code: 'sv' },
    { name: 'Tamil', code: 'ta' },
    { name: 'Telugu', code: 'te' },
    { name: 'Thai', code: 'th' },
    { name: 'Turkish', code: 'tr' },
    { name: 'Ukrainian', code: 'uk' },
    { name: 'Urdu', code: 'ur' },
    { name: 'Vietnamese', code: 'vi' },
    { name: 'Zulu', code: 'zu' },
];

const sortedLanguages = languages.sort((a, b) => a.name.localeCompare(b.name));

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    targetLanguage,
    setTargetLanguage,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTargetLanguage(event.target.value);
    };

    return (
        <div className="language-selector">
            <select value={targetLanguage} onChange={handleChange}>
                {sortedLanguages.map((language) => (
                    <option key={language.code} value={language.code}>
                        {language.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
