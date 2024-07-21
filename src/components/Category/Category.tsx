import Bubble from "../Bubble/Bubble";
import Separator from "../Separator/Separator";
import Title from "../Title/Title";
import "./Category.css";

type Lines = { text: string; bulletPoint: boolean }[];

type WorkExperiences = {
  position: string;
  company: string;
  location: string;
  type: string;
  years: string;
  bubbles: string[];
  lines: Lines;
};

type Projects = {
  name: string;
  duration: string;
  bubbles: string[];
  lines: Lines;
};

type Data = Projects | WorkExperiences;

const Category = ({ data }: { data: Data[] }) => {
  const isProjectSection = "name" in data[0];

  const renderSubtitle = (data: Data) => {
    if ("duration" in data) {
      return <span>{data.duration}</span>;
    } else {
      return (
        <span>
          {data.location} • {data.company} • {data.type} • {data.years}
        </span>
      );
    }
  };

  const renderTitle = (data: Data) => {
    return "duration" in data ? data.name : data.position;
  };

  return (
    <div className="category">
      <Title text={isProjectSection ? "Projects" : "Work Experience"} />
      <div>
        {data.map((item, index) => {
          return (
            <div className="category__data" key={index}>
              <div className="category__title">{renderTitle(item)}</div>
              <div className="category__subtitle">{renderSubtitle(item)}</div>
              <div className="category__bubbles">
                {item.bubbles.map((bubble, bubble_index) => (
                  <Bubble key={bubble_index} text={bubble} />
                ))}
              </div>
              <ul className="category__lines">
                {item.lines.map((line, line_index) => (
                  <li key={line_index} className={line.bulletPoint ? "category__bulletPoints" : ""}>
                    {line.text}
                  </li>
                ))}
              </ul>
              {index !== data.length - 1 && (
                <Separator marginBottom={10} marginTop={2} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
