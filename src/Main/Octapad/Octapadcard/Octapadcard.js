import "./Octapadcard.css";

const Octapadcard = (props) => {
  return (
    <div
      className="Octapadcard"
      onClick={() => {
        new Audio(props.tune).play();
      }}
    ></div>
  );
};

export default Octapadcard;
