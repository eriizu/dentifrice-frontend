import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <React.Fragment>
      <p>
        <Link to="/clocks">Clocks</Link>
      </p>
      <p>
        <Link to="/counters">Counter</Link>
      </p>
      <p>
        <Link to="/login">Login</Link>
      </p>
      {/* <Link to="/counters">Counters</Link> */}
    </React.Fragment>
  );
}

export default NavBar;
