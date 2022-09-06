import "./Drumkit.css";
import { useContext } from "react";
import Imgcontext from "../../Store/image-context";
import Tunecontext from "../../Store/tunes-context";
const Drumkit = (props) => {
  const imgctx = useContext(Imgcontext);
  const tunectx = useContext(Tunecontext);
  console.log(imgctx);
  return (
    <div className="mydrumkit">
      <img src={imgctx[0]} />
      <div
        className="mydrumkittaal1"
        onClick={() => {
          new Audio(tunectx.drumkittune[0]).play();
        }}
      ></div>

      <div
        className="mydrumkittaal2"
        onClick={() => {
          new Audio(tunectx.drumkittune[1]).play();
        }}
      >
        {" "}
      </div>
      <div
        className="mydrumkitdhol1"
        onClick={() => {
          new Audio(tunectx.drumkittune[2]).play();
        }}
      ></div>
      <div
        className="mydrumkitdhol2"
        onClick={() => {
          new Audio(tunectx.drumkittune[3]).play();
        }}
      ></div>
      <div
        className="mydrumkitdhol3"
        onClick={() => {
          new Audio(tunectx.drumkittune[4]).play();
        }}
      ></div>
      <div
        className="mydrumkitdhol4"
        onClick={() => {
          new Audio(tunectx.drumkittune[5]).play();
        }}
      ></div>
    </div>
  );
};

export default Drumkit;
