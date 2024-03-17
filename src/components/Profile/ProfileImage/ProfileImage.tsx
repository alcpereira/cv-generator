import "./ProfileImage.css";
import ProfilePicture from "../../../assets/profile.png";

type ImageOptions = {
  circular?: boolean;
};

const ProfileImage = (options: ImageOptions = {}) => {
  const classes = `profile__header__image ${
    options.circular ? "profile__header__image__circular" : ""
  }`;

  return (
    <div className={classes}>
      <img src={ProfilePicture} alt="Profile" />
    </div>
  );
};

export default ProfileImage;
