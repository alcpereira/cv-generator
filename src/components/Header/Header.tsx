import Separator from "../Separator/Separator";
import "./Header.css";

type HeaderProps = {
  name: string;
  resume: string;
};

const Header = ({ headerData }: { headerData: HeaderProps }) => {
  const resumeLines = headerData.resume.split("\n");
  return (
    <>
      <div className="header__container">
        <h1 className="header__name">{headerData.name}</h1>
        <div className="header__lines">
          {resumeLines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <Separator marginBottom={10} marginTop={5} />
    </>
  );
};

export default Header;
