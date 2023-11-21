// ModalGameList.js
import React from 'react';
import cls from './ModalGameList.module.scss';

export default function ModalGameList({ gamesList, closeModal }) {
  return (
    <div className={cls.modal}>
    <div className={cls.modalContent}>
      <span className={cls.close} onClick={closeModal}>&times;</span>
      <h2>Список игр для {gamesList.name}</h2>
      <ul>
        <li>Первое место: {gamesList.firstPlace}</li>
        <li>Второе место: {gamesList.secondPlace}</li>
        <li>Третье место: {gamesList.thirdPlace}</li>
        <li>Четвертое место: {gamesList.fourthPlace}</li>
      </ul>
    </div>
  </div>
  );
}
