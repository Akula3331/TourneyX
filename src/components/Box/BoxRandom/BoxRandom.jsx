import React, { useState, useEffect } from "react";
import cls from "./BoxRandom.module.scss";
import gsap from "gsap";

export default function BoxRandom({ card }) {
  const [infoVisible, setInfoVisible] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [cardTitleVisible, setCardTitleVisible] = useState(false);
  const [cardBgVisible, setCardBgVisible] = useState(false);
  const [closeButtonVisible, setCloseButtonVisible] = useState(false);
  const [cardImgVisible, setCardImgVisible] = useState(false);

  const resetCard = () => {
    setInfoVisible(false);
  };

  const handleCardSelection = () => {
    setCardTitleVisible(false);
    setCardBgVisible(false);
    setCloseButtonVisible(false);

    // Начинаем тряску
    setIsShaking(true);

    const timeline = gsap.timeline();
    timeline.to(`.${cls["card-container"]}`, {
      x: 5,
      duration: 0.1,
      repeat: -1,
      yoyo: true,
    });

    // Через 2 секунды останавливаем тряску
    setTimeout(() => {
      setIsShaking(false);
      timeline.kill();
    }, 12000);

    // Показываем информацию о карточке
    setTimeout(() => {
      setInfoVisible(true);
    }, 4000); // Измените это значение на желаемую задержку

    // Постепенно показываем название карточки через 4 секунды
    setTimeout(() => {
      setCardImgVisible(true);
      gsap.fromTo(
        `.${cls.cardImg}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.1 }
      );
    }, 7000);
    setTimeout(() => {
      setCardTitleVisible(true);
      gsap.fromTo(
        `.${cls.cardTitle}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.1 }
      );
    }, 9000);

    // Постепенно показываем редкость через 6 секунд
    setTimeout(() => {
      setCardBgVisible(true);
      gsap.fromTo(
        `.${cls.cardRarity}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.1 }
      );

      // Устанавливаем видимость кнопки "Закрыть"
      setTimeout(() => {
        setCloseButtonVisible(true);
      }, 2000);
    }, 12000);
  };

  let borderColor, triangleColor, txtBackgroundColor, rectangleColor,backgroundColor;
  if (card) {
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
  } else {
  }

  return (
    <div className={cls["random-container"]}>
      {infoVisible ? (
        <div
          className={`${cls["card-container"]} ${
            isShaking ? cls["shaking"] : ""
          }`}
        >
          <div
            className={cls.selectedCard}
            style={{
              borderColor: borderColor,
            }}
          >
            <div
              className={cls.triangle}
              style={{ borderTopColor: triangleColor }}
            ></div>

            <div
              className={cls.txtCon}
              style={{ backgroundColor: txtBackgroundColor }}
            >
              {cardTitleVisible && (
                <p className={`${cls.cardTitle} ${cls.fadeIn}`}>
                  {card?.title}
                </p>
              )}
            </div>
            <div
              className={cls.rectangle}
              style={{ borderBottomColor: rectangleColor }}
            ></div>
            {cardImgVisible && (
              <img className={cls.cardImg} src={card?.icon} alt="" />
            )}
            {cardBgVisible && (
              <img className={cls.cardBgImg} src={card?.image} alt="" />
            )}
          </div>
          {closeButtonVisible && (
            <button className={cls.btn} onClick={resetCard}>
              Закрыть
            </button>
          )}
        </div>
      ) : (
        <div className={cls["card-container"]}>
          <button className={cls.btn} onClick={handleCardSelection}>
            {infoVisible ? "Закрыть" : "Открыть"}
          </button>
        </div>
      )}
    </div>
  );
}
