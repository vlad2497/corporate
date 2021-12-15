import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Snowfall from "react-snowfall";

import Header from "components/base/header";
import Main from "pages/main";
import Sorts from "pages/sorts";
import Rating from "pages/rating";
import Settings from "pages/settings";

import "./index.css";

const backgroundImageStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/background.png"})`,
};

ReactDOM.render(
  <div className="app_container" style={backgroundImageStyle}>
    <div className="app_content">
      <BrowserRouter>
        <Snowfall />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sorts" element={<Sorts />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>,

  document.getElementById("root")
);
