import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Demo() {
  return (
    <div className='linkContainer'>
      <Link to='/display' className='link'>
        <span>helllo</span>
      </Link>
    </div>
  );
}

export default Demo;
