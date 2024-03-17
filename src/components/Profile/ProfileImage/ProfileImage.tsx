import "./ProfileImage.css";
import ProfilePicture from "../../../assets/profile.png";
import clsx from 'clsx';

type ImageOptions = {
  circular?: boolean;
};

const ProfileImage = (options: ImageOptions = {}) => {
  const classes = clsx(
    'profile__header__image',
    { 'profile__header__image__circular': options.circular }
  );

  return (
    <div className={classes}>
      <img src={ProfilePicture} alt="Profile" />
    </div>
  );
};

export default ProfileImage;
