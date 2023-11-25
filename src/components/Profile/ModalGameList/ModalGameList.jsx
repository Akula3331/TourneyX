// ModalGameList.js
import React from 'react';
import cls from './ModalGameList.module.scss';
export default function ModalGameList({ isOpen, onClose, place, gameData }) {
  if (!isOpen || !gameData) {
    return null;
  }

  const calculateGamePoints = (game) => {
    const firstPlacePoints = parseInt(game.firstPlace, 10);
    const secondPlacePoints = parseInt(game.secondPlace, 10);
    const thirdPlacePoints = parseInt(game.thirdPlace, 10);
    const fourthPlacePoints = parseInt(game.fourthPlace, 10);

    return {
      first: 4 * firstPlacePoints,
      second: 3 * secondPlacePoints,
      third: 2 * thirdPlacePoints,
      fourth: 1 * fourthPlacePoints,
    };
  };

  return (
    <div className={cls.modal}>
      <div className={cls.modal_overlay} onClick={onClose}></div>
      <div className={cls.modal_content}>
        <div className={cls.header}>
          <p>Режимы</p>
          <p>Занято</p>
          <p>Баллы</p>
        </div>
        <div className={cls.modalBlock}>
          {gameData.map((game, index) => (
            <div className={cls.modalCon} key={index}>
              <div className={cls.name}>{game.name}</div>
              <div className={cls.block}>
              <p className={cls.item}>{game[`${place}Place`]}</p>
              <p className={cls.item}> {calculateGamePoints(game)[place.toLowerCase()]}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}