import React from "react";

import { Link } from "react-router-dom";

import Logo from "../images/platziconf-logo.svg";
import astronaut from "../images/astronauts.svg";
import "./styles/Home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="row Home">
        <div className="col-4 Home__col Home__col-description">
          <img src={Logo} alt="Logo Conferencia" />
          <p>PRINT YOUR BADGES</p>
          <Link to="/badges" className="btn btn-primary">
            Start Now
          </Link>
        </div>
        <div className="col-8 Home__col Home__col-img">
          <img src={astronaut} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
