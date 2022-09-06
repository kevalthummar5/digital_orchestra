import "./main.css";

import Drumkit from "./Drumkit/Drumkit";
import Nagara from "./Nagara/Nagara";
import Tabala from "./Tabala/Tabala";
import Octapad from "./Octapad/Octapad";
import Keyboard from "./Keyboard/Keyboard";
import { useContext } from "react";
import Themecontext from "../Store/Theme-context";
const Main = () => {
  const themectx = useContext(Themecontext);
  return (
    <div
      className="Main"
      style={{
        backgroundImage: themectx.light
          ? "linear-gradient(to right, #fea82f, #fcecdd, #fea82f)"
          : "linear-gradient(to right, #5800ff, #00d7ff, #5800ff)",
      }}
    >
      Main
      <Drumkit></Drumkit>
      <Nagara></Nagara>
      <Tabala></Tabala>
      <Octapad></Octapad>
      <div className="octapadstand"></div>
      <Keyboard></Keyboard>
      <div
        className="mainfloor"
        style={{
          backgroundImage: themectx.light
            ? "radial-gradient(white, #512b2b)"
            : "radial-gradient(white, #f02b76)",
        }}
      ></div>
    </div>
  );
};

export default Main;
