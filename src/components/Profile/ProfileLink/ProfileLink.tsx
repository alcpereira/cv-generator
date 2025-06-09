import { FaGithub, FaHouseUser, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaBluesky } from "react-icons/fa6";
import "./ProfileLink.css";

export type ProfileLinkProps = {
  /** Only GitHub Twitter LinkedIn Website */
  type: string;
  /** Please, use without https:// */
  link: string;
  /** Optional: custom display name for the link */
  name?: string;
};

const ProfileLink = ({ type, link, name }: ProfileLinkProps) => {
  let icon;

  switch (type) {
    case "GitHub":
      icon = <FaGithub />;
      break;
    case "Twitter":
      icon = <FaSquareXTwitter />;
      break;
    case "LinkedIn":
      icon = <FaLinkedin />;
      break;
    case "Website":
      icon = <FaHouseUser />;
      break;
    case "Bluesky":
      icon = <FaBluesky />;
      break;
  }

  return (
    <div className="profile__header__link">
      <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">
        {icon}
        <span>{name || type}</span>
      </a>
    </div>
  );
};

export default ProfileLink;
