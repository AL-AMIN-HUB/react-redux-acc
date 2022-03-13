import React, { useState } from "react";
import Footer from "./common/Footer/Footer";
import Header from "./common/Header/Header";
import Main from "./Main";

const TheLayout = () => {
  const [state, setState] = useState();
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default TheLayout;
