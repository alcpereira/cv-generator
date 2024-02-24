import "./Separator.css";

const Separator = ({
  marginTop = 10,
  marginBottom = 10,
}: {
  marginTop?: number;
  marginBottom?: number;
}) => {
  return <div className="separator" style={{ marginBottom, marginTop }}></div>;
};

export default Separator;
