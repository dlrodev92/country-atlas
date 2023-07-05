import React from "react";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import "./Main.css";

function Main(props) {
  const [cards, setCards] = useState(props.data);
  const [region, setRegion] = useState("All");
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  

  function filterCardsByRegion(region) {
    const filteredCards = props.data.filter((card) => {
      return card.region === region;
    });
    setCards(filteredCards);
  }

  function filterCardsByName(name) {
    const filteredCardsByName = props.data.filter((card) => {
        return card.name.common.toLowerCase().includes(name.toLowerCase());
    });
    setCards(filteredCardsByName);
  };

    useEffect(() => {
    if (name === "") {
        return () => setCards(props.data);
    }else{
        return filterCardsByName(name);
    }
    }, [name,filterCardsByName,props.data]);

      useEffect(() => {
    if (region === "All") {
        return () => setCards(props.data);
    }else{
     return filterCardsByRegion(region);
    }
    }, [region,filterCardsByRegion,props.data]);
  
    const handleRegion = (value) => {
    setRegion(value);
    };

    const handleName = (value) => {
        setName(value);
    };

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }



  return (
    <div className="main" >
       
      <Header handleRegion={handleRegion} handleName={handleName} darkMode={darkMode} handleDarkMode={handleDarkMode}/>
      <Card data={cards} darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default Main;
