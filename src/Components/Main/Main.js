import React, { useEffect, useState, useCallback } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import "./Main.css";

function Main(props) {
  const [cards, setCards] = useState(props.data);
  const [region, setRegion] = useState("All");
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filterCardsByRegion = useCallback((region) => {
    const filteredCards = props.data.filter((card) => {
      return card.region === region;
    });
    setCards(filteredCards);
  }, [props.data]);

  const filterCardsByName = useCallback((name) => {
    const filteredCardsByName = props.data.filter((card) => {
      return card.name.common.toLowerCase().includes(name.toLowerCase());
    });
    setCards(filteredCardsByName);
  }, [props.data]);

  useEffect(() => {
    if (name === "") {
      setCards(props.data);
    } else {
      filterCardsByName(name);
    }
  }, [name, filterCardsByName, props.data]);

  useEffect(() => {
    if (region === "All") {
      setCards(props.data);
    } else {
      filterCardsByRegion(region);
    }
  }, [region, filterCardsByRegion, props.data]);

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handleName = (value) => {
    setName(value);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="main">
      <Header
        handleRegion={handleRegion}
        handleName={handleName}
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      />
      <Card data={cards} darkMode={darkMode} />
      <Footer />
    </div>
  );
}

export default Main;