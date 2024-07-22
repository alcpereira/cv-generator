import Separator from "../Separator/Separator";
import "./Header.css";

type HeaderProps = {
  name: string;
  resume: string[];
};

const Header = ({ name, resume }: HeaderProps) => {
  return (
    <>
      <div className="header__container">
        <h1 className="header__name">{name}</h1>
        <div className="header__lines">
          {resume.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <Separator marginBottom={10} marginTop={5} />
    </>
  );
};

export default Header;
