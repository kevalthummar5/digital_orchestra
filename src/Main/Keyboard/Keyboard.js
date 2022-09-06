// import { keyboard } from "@testing-library/user-event/dist/keyboard";
import "./Keyboard.css";
import { useContext, useState } from "react";
import Imgcontext from "../../Store/image-context";
import Tunecontext from "../../Store/tunes-context";
import Keycard from "./Keycard/Keycard";
const Keyboard = (props) => {
  const imgctx = useContext(Imgcontext);
  const tunectx = useContext(Tunecontext);
  return (
    <div className="keyboard">
      <img src={imgctx[4]} />
      <div className="keyboardmain">
        {tunectx.keyboardtune.map((event) => {
          return <Keycard tune={event}></Keycard>;
        })}
      </div>
    </div>
  );
};

export default Keyboard;
