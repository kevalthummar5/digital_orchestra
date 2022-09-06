import { useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Themecontext from "./Store/Theme-context";
const App = () => {
  const [themesetter, setthemesetter] = useState(true);
  const darkthemehandler = () => {
    setthemesetter(false);
  };
  const lightthemehandler = () => {
    setthemesetter(true);
  };
  console.log(themesetter);

  return (
    <Themecontext.Provider
      value={{
        light: themesetter,
        lighthandle: lightthemehandler,
        darkhandle: darkthemehandler,
      }}
    >
      <div className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </Themecontext.Provider>
  );
};

export default App;
