// ModalGameList.js
import React from 'react';
import cls from './ModalGameList.module.scss';

export default function ModalGameList({ isOpen, onClose, place, gameData }) {
  if (!isOpen || !gameData) {
    return null;
  }
  console.log("gameData:", gameData);

  return (
    <div className={cls.modal}>
      <div className={cls.modal_content}>
        <span className={cls.close} onClick={onClose}>&times;</span>
        <h2>{`${place} место - ${gameData[0].name}`}</h2>
          <p>kjbaskdbkj</p>

      </div>
    </div>
  );
}
