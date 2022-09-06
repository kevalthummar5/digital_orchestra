import { useContext } from "react";
import Imgcontext from "../../Store/image-context";
import Tunecontext from "../../Store/tunes-context";
import "./Tabala.css";

const Tabala = (props) => {
  const imgctx = useContext(Imgcontext);
  const tunectx = useContext(Tunecontext);
  return (
    <div className="tabala">
      <img src={imgctx[2]} />
      <div
        className="tabaladhol1"
        onClick={() => {
          new Audio(tunectx.tabalatune[0]).play();
        }}
      ></div>
      <div
        className="tabaladhol2"
        onClick={() => {
          new Audio(tunectx.tabalatune[1]).play();
        }}
      ></div>
    </div>
  );
};

export default Tabala;
