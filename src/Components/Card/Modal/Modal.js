import React, { useState, useEffect } from "react";
import "./Modal.css";
import Map from "./Map/Map";
import {useLoadScript} from "@react-google-maps/api";

function Modal(props) {
  const [borders, setBorders] = useState("");

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyBSgFeEI9SNQ9a0_qRp6HzPdzR9eOJGFVI"
    ,
    libraries: ["places"],
});



  // useEffect(() => {
  //   if (props.selectedCard.borders === false || typeof props.selectedCard.borders === "undefined") {
  //     setBorders("none");
  //   } else {
  //     setBorders(
  //       props.selectedCard.borders.map((border) => {
  //         return <li onClick={handleSelectedCardChange} className="border" key={border}>{border}</li>;
  //       })
  //     );
  //   }
  // }, [props.selectedCard.borders]);

useEffect(() => {
  const handleBorders = () => {
    if (!props.selectedCard || !props.selectedCard.borders || props.selectedCard.borders === false) {
      setBorders("none");
    } else {
      setBorders(
        props.selectedCard.borders.map((border) => {
          return (
            <li onClick={handleSelectedCardChange} className="border" key={border}>
              {border}
            </li>
          );
        })
      );
    }
  };

  handleBorders();
}, [props.selectedCard]);

  function handleSelectedCardChange(event){
    const actualBorder = event.target.textContent;
    const newCountry =  props.data.find(country => country.cca3 === actualBorder)
    props.handleSelectedCardChange(newCountry);
    }
  
  return (
    <div className={props.darkMode?"modal-dark":"modal"}>
      
      <div className="flag"><img src={props.selectedCard.flags.svg}/>
      <h1 className="close" onClick={props.onClose}>X</h1></div>
      <h1 className="title">{props.selectedCard.name.official}</h1>
      <div className={props.darkMode?"dark-details":"details"}>
        <ul>
          <h2>Details</h2>
          <li>Capital: {props.selectedCard.capital}</li>
          <li>Region: {props.selectedCard.region}</li>
          <li>Subregion: {props.selectedCard.subregion}</li>
          <li>Population: {props.selectedCard.population.toLocaleString()}</li>
          <li>Demonyms: {props.selectedCard.demonyms.eng.m}, {props.selectedCard.demonyms.eng.f}</li>
        </ul>
        {!isLoaded ? (
        <h1>Loading Map...</h1>
        ) : (
        <Map lat={props.selectedCard.latlng[0]} lng={props.selectedCard.latlng[1]}/>
         )}
      </div>
      <div className="borders">
        <h2>Borders</h2>
        {borders}
      </div>
    </div>
  );
}

export default Modal;

