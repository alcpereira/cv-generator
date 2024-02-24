import "./Bubble.css";

const Bubble = ({ text }: { text: string }) => {
  return <span className="bubble">{text}</span>;
};

export default Bubble;
