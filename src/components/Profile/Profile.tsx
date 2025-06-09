import "./Profile.css";
import Title from "../Title/Title";
import Bubble from "../Bubble/Bubble";
import ProfileImage from "./ProfileImage/ProfileImage";
import ProfileLanguages, {
  type Language,
} from "./ProfileLanguages/ProfileLanguages";
import ProfileLink, { ProfileLinkProps } from "./ProfileLink/ProfileLink";

type TechnicalCategory = {
  category: string;
  bubbles: string[];
};

type Education = {
  degree: string;
  school: string;
  location: string;
  years: string;
};

type Data = {
  profile: {
    shouldDisplayProfileImage: boolean;
    lines: string[];
    links: ProfileLinkProps[];
  };
  technical: TechnicalCategory[];
  languages: Language[];
  education: Education[];
};

const ProfileHeader = ({
  lines,
  links,
  shouldDisplayProfileImage,
}: Data["profile"]) => {
  return (
    <div className="profile__header">
      {shouldDisplayProfileImage && (
        <ProfileImage circular={true} border={true} />
      )}
      <div className="profile__header__lines">
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="profile__header__links">
        {links.map((link, index) => {
          return <ProfileLink key={index} {...link} />;
        })}
      </div>
    </div>
  );
};

const ProfileSkills = ({ technical }: { technical: TechnicalCategory[] }) => {
  return (
    <div className="profile__block-container">
      <Title text="Technical Skills" />
      {technical.map((tech, index) => {
        return (
          <div className="profile__skills-category" key={index}>
            <span className="profile__skills-span">{tech.category}</span>
            <div className="profile__skills-bubbles">
              {tech.bubbles.map((bubble, b_index) => (
                <Bubble key={b_index} text={bubble} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ProfileEducation = ({ education }: { education: Education[] }) => {
  return (
    <div className="profile__block-container">
      <Title text="Education" />
      <div className="profile__education-container">
        {education.map((edu, index) => {
          return (
            <div className="profile__education-element" key={index}>
              <span className="profile__education-degree">{edu.degree}</span>
              <span className="profile__education-school">{edu.school}</span>
              <span className="profile__education-location">
                {edu.location}
              </span>
              <span className="profile__education-years">{edu.years}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Profile = ({ data }: { data: Data }) => {
  return (
    <div className="profile__container">
      <ProfileHeader {...data.profile} />
      <ProfileSkills technical={data.technical} />
      <ProfileLanguages languages={data.languages} showAbbreviation={false} />
      <ProfileEducation education={data.education} />
    </div>
  );
};

export default Profile;
