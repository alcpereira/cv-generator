import Title from "../../Title/Title";
import "./ProfileLanguages.css";

export type Language = {
  language: string;
  abbreviation: string;
  level: string;
};

const ProfileLanguages = ({
  languages,
  showAbbreviation,
}: {
  languages: Language[];
  showAbbreviation: boolean;
}) => {
  return (
    <div className="profile__block-container">
      <Title text="Languages" />
      <div className="profile__languages-container">
        {languages.map((language, index) => {
          return (
            <div className="profile__languages-language" key={index}>
              <span className="profile__languages-abb">
                {showAbbreviation && language.abbreviation
                  ? language.abbreviation
                  : language.language}
              </span>
              <span className="profile__languages-level">{language.level}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileLanguages;
