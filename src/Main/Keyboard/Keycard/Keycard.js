import "./Keycard.css";

const Keycard = (props) => {
  return (
    <div
      className="Keycard"
      onClick={() => {
        new Audio(props.tune).play();
      }}
    ></div>
  );
};

export default Keycard;
