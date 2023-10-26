import React, { useEffect, useState } from "react";
import cls from "./BoxPage.module.scss";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonCard from "../../components/CardCon/PersonCard/PersonCard";
import BoxRandom from "../../components/Box/BoxRandom/BoxRandom";

export default function BoxPage() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  function getRandomCard(cards) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  }

  useEffect(() => {
    axios
      .get("/box.json")
      .then((response) => {
        const initialCards = response.data.cards.map((card) => ({
          ...card,
          flipped: false,
        }));
        setCards(initialCards);

        // Выберем случайную карточку и установим её в `selectedCard`
        const randomCard = getRandomCard(initialCards);
        setSelectedCard(randomCard);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={cls.con}>
      <div>
        <h1 className={cls.title}>Персонажи</h1>
        <Slider className={cls.sliderCon} {...settings}>
          {cards.map((card, index) => (
            <PersonCard key={index} card={card} />
          ))}
        </Slider>
      </div>

      <div>
        <h1 className={cls.title}>Выбить персонажа</h1>

        <BoxRandom card={selectedCard} />
      </div>
    </div>
  );
}
