import React, { useEffect, useState } from "react";
import cls from "./PersonCard.module.scss";

export default function PersonCard({ card }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    // Определите цвета на основе редкости карточки
    let borderColor, triangleColor, txtBackgroundColor, rectangleColor;
    switch (card.rarity) {
      case "common":
        borderColor = "#cccccc";
        triangleColor = "#cccccc";
        txtBackgroundColor = "#cccccc";
        rectangleColor = "#cccccc";
        break;
      case "rare":
        borderColor = "#1e90ff";
        triangleColor = "#1e90ff";
        txtBackgroundColor = "#1e90ff";
        rectangleColor = "#1e90ff";
        break;
      case "epic":
        borderColor = "#9400d3";
        triangleColor = "#9400d3";
        txtBackgroundColor = "#9400d3";
        rectangleColor = "#9400d3";
        break;
      case "legendary":
        borderColor = "#ffa500";
        triangleColor = "#ffa500";
        txtBackgroundColor = "#ffa500";
        rectangleColor = "#ffa500";
        break;
      default:
        borderColor = "#1e90ff"; // Цвет по умолчанию
        triangleColor = "#1e90ff";
        txtBackgroundColor = "#1e90ff";
        rectangleColor = "#1e90ff";
        break;
    }

    return (
      <div
        className={`${cls.card} ${isFlipped ? cls.flipped : ""}`}
        onClick={handleFlip}
        style={{
          backgroundImage: `url(${card.image})`,
          borderColor: borderColor,
        }}
      >
        <div className={cls.triangle} style={{ borderTopColor: triangleColor }}></div>
        
        <div className={cls.txtCon} style={{ backgroundColor: txtBackgroundColor }}>
          <p className={cls.name}>{card.title}</p>
        </div>
        <div className={cls.rectangle} style={{ borderBottomColor: rectangleColor }}></div>
        <img className={cls.img} src={card.icon} alt={card.title} />
        <div className={`${cls.back} ${isFlipped ? cls.flipped : ""}`}>
          <p className={cls.text}>{card.description}</p>
          <div className={cls.block}>
            <p className={cls.blockItem}>Здоровье: {card.characteristics.health}</p>
            <p className={cls.blockItem}>Атака: {card.characteristics.damage}</p>
            <p className={cls.blockItem}>Защита: {card.characteristics.defense}</p>
            <p className={cls.blockItem}>Ход: {card.characteristics.move}</p>
            <p className={cls.blockItem}>Тип атаки: {card.characteristics.range}</p>
          </div>
        </div>
      </div>
    );
  }