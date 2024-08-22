import { FaGithub, FaHouseUser, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./ProfileLink.css";

export type ProfileLinkProps = {
  /** Only GitHub Twitter LinkedIn Website */
  type: string;
  /** Please, use without https:// */
  link: string;
};

const ProfileLink = ({ type, link }: ProfileLinkProps) => {
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
  }

  return (
    <div className="profile__header__link">
      {icon}
      <a href={`https://${link}`}>{type}</a>
    </div>
  );
};

export default ProfileLink;
