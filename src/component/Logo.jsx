import React from "react";
import logo from "../assets/img/Logo1.png";
import logo_txt from "../assets/img/Logo_text1.png";
import moon from "../assets/img/back2.png";
import { CenterFocusStrong } from "@mui/icons-material";

export default function Logo() {
  return (
    <section id="logo">
      <div className="logo__inner">
        <h2 className="logo__title">LOGO</h2>
        <div className="logo_content">
          <div className="logo__image">
            <img src={logo} alt="Logo" />
          </div>
          <div className="logo__image">
            <img src={logo_txt} alt="Logo Text" />
          </div>
        </div>
        <div className="logo__desc">
          <h3>직접 제작한 로고입니다</h3>
        </div>
      </div>
    </section>
  );
}
