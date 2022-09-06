import { useContext } from "react";
import Imgcontext from "../../Store/image-context";
import Tunecontext from "../../Store/tunes-context";
import "./Octapad.css";
import Octapadcard from "./Octapadcard/Octapadcard";

// console.log(pads);
const Octapad = (props) => {
  const imgctx = useContext(Imgcontext);
  const tunectx = useContext(Tunecontext);
  return (
    <div className="octapad">
      <img src={imgctx[3]} />
      <div className="octapadmain">
        {tunectx.octapadtune.map((event) => {
          return <Octapadcard tune={event}></Octapadcard>;
        })}
      </div>
    </div>
  );
};

export default Octapad;
