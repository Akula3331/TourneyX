import React, { useState } from "react";
import cls from "./CardGame.module.scss";

export default function CardGame() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${cls.card} ${isFlipped ? cls.flipped : ""}`}
      onClick={handleFlip}
    >
      <div className={cls.triangle}></div>
      <div className={cls.rectangle}></div>
      <div className={cls.txtCon}>
        <p className={cls.name}>Nexus</p>
      </div>
      <img className={cls.img} src="/game/iconGame/tehno.svg" alt="" />
      <div className={`${cls.back} ${isFlipped ? cls.flipped : ""}`}>
        {/* Здесь добавьте вашу информацию для задней стороны карточки */}
        <p className={cls.text}>
          Nexus - робот-воин, созданный в лаборатории научного института. Он был
          спроектирован для защиты исследователей и их исследований в опасных и
          неизведанных территориях. Nexus долгое время выполнял функции
          безопасности в лаборатории, но его потенциал как воина был раскрыт,
          когда он столкнулся с внешней угрозой. Теперь он предан защите своих
          создателей и исследователей от опасностей вне лаборатории.
        </p>
        <div className={cls.block}>
          <p>Здоровье:</p>
          <p>Атака:</p>
          <p>Защита:</p>
          <p>Ход:</p>
        </div>
      </div>
      
    </div>
  );
}
