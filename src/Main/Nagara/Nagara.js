import Imgcontext from "../../Store/image-context";
import "./Nagara.css";
import { useContext } from "react";
import Tunecontext from "../../Store/tunes-context";
// import sound from "..../tunes/nagara.mp3";
const Nagara = (props) => {
  const imgctx = useContext(Imgcontext);
  const tunectx = useContext(Tunecontext);
  return (
    <div className="nagara">
      <img src={imgctx[1]} />
      <div
        className="nagaradhol1"
        onClick={() => {
          new Audio(tunectx.nagaratune).play();
        }}
      ></div>
    </div>
  );
};

export default Nagara;
