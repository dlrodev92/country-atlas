import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'


import "./Header.css";

function Header(props) {
  

  function handleChange (event){
   const value = event.target.value
   props.handleName(value);
  }

  function selectValue(event) {
    const value = event.target.value;
    props.handleRegion(value);
  }


  return (
    <header className={props.darkMode? "header dark" : ""}>
      <div className="page-title">
        <div className="toggler">
                <div className="toggler--slider" onClick={props.handleDarkMode}>
                    <div className="toggler--slider--circle">
                    {props.darkMode ? (
                     <FontAwesomeIcon className="sun" icon={faSun} />
                        ) : (
                      <FontAwesomeIcon icon={faMoon} />
                                 )}
                    </div>
                </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="https://raw.githubusercontent.com/abhishek2f24/Dr.-Sheldon-Cooper-presents-FUN-with-FLAGS/master/sheldon.jpg" alt="sheldon flags"/>
      </div>
      <div className="search-container">
        <div className={props.darkMode? "search country-dark" : "search country"}>
        <h4>Country</h4>
        <input type="text" placeholder="Search" onChange={handleChange} /> 
        </div>
        <div className={props.darkMode? "search region-dark" : "search region"}>
        <h4>Region</h4>
          <select
            onChange={selectValue}
            name="regions"
            id="regions"
            className="custom-select"
          >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
