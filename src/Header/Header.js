import { useContext, useState } from "react";
import Themecontext from "../Store/Theme-context";
import "./header.css";

const Header = () => {
  const themectx = useContext(Themecontext);

  return (
    <div className="Header">
      <h2>DHUM DHADAKA ORCHESTRA</h2>
      <button onClick={themectx.lighthandle} className="headerbtn1">
        LIGHT
      </button>
      <button onClick={themectx.darkhandle} className="headerbtn2">
        DARK
      </button>
    </div>
  );
};

export default Header;
