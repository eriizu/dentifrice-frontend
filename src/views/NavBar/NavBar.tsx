import React from "react";
import "./NavBar.css";
import logoCalendar from "../../assets/calendar.svg";
import logoEuro from "../../assets/euro.svg";
import logoThinking from "../../assets/thinking.svg";
import logoPorteEponge from "../../assets/porte-eponge.jpg";

function NavBar() {
  return (
    <div className="nav">
      <div className="NavItem">
        <img src={logoPorteEponge} alt="porte éponge"></img>
      </div>
      <div className="NavItem">
        <img src={logoEuro} alt="euro icon"></img>
      </div>
      <div className="NavItem">
        <img src={logoThinking} alt="thinking bubble icon"></img>
      </div>
      <div className="NavItem">
        <img src={logoCalendar} alt="calendar icon"></img>
      </div>
    </div>
  );
}

export default NavBar;
