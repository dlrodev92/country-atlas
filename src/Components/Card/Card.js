import React from "react";
import { useState } from "react";
import "./Card.css";
import Modal from "./Modal/Modal";


function Card(props){
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const closeModal = () => {
    setModalOpen(false);
  };

    const Card = props.data.map((card, index) => {
        return(
            <div className={props.darkMode? "dark-card-component" : "card-component"}>
                <img src={card.flags.png} alt="flag"/>
                <h2>{card.name.common}</h2>
                <h3>Region:{card.region}</h3>
                <h3>Capital:{card.capital}</h3>
                <button onClick={() => handleSelectedCard(index)} >More Info</button>
            </div>
        )
    });


    function handleSelectedCard(index){
      const selectedCard = props.data[index];
      setModalOpen(true);
      setSelectedCard(selectedCard);
    }
   function handleSelectedCardChange(value){
     setSelectedCard(value);
   }

    return (
      <div className={props.darkMode? "dark-card-container" : "card-container"}>
        {modalOpen && <Modal onClose={closeModal} selectedCard={selectedCard} darkMode={props.darkMode} data={props.data} handleSelectedCardChange={handleSelectedCardChange} />}
        {Card}
      </div>
    )
}

export default Card;