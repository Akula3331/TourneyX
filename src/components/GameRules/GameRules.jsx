import React from 'react'
import cls from './GameRules.module.scss'

export default function GameRules({gameData}) {
  const addNumbersToRules = (rules) => {
    return rules.map((rule, index) => {
      return (
        <li key={index}>
          {`${index + 1}. ${rule}`}
        </li>
      );
    });
  };

  return (
    <div className={cls.con}>
      <h2 className={cls.gameName}>{gameData.name}</h2>
      {Array.isArray(gameData.rules) ? (
        <ul className={cls.rules}>
          {addNumbersToRules(gameData.rules)}
        </ul>
      ) : (
        <p className={cls.rules}>{gameData.rules}</p>
      )}
      {gameData.game && (
        <a className={cls.btn} href={gameData.game} target="_blank" rel="noopener noreferrer">
          Скачать {gameData.name}
        </a>
      )}
    </div>
  );
}