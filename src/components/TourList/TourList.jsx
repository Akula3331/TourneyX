import React, { useEffect, useState } from "react";
import cls from "./TourList.module.scss";
import axios from 'axios'

export default function TourList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("/players.json")
      .then((response) => {
        // Загрузите данные из JSON и сортируйте их
        const sortedPlayers = response.data.players.sort((a, b) => b.points - a.points);
        setPlayers(sortedPlayers);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, []);

  return (
    <div className={cls.TourList}>
      <div className={cls.head}>
        <div className={cls.glavIcon}>
          <img src="/icons/medal.svg" alt="" />
        </div>
        <div className={cls.title}>Рейтинг мини-игр</div>
      </div>
      <div className={cls.table}>
        <div className={cls.subTitle}>
          <p className={cls.tableName}>Место</p>
          <p className={cls.tableName}>Игрок</p>
          <p className={cls.tableName}>Очки</p>
        </div>
        {/* Маппим отсортированный массив для отображения */}
        {players.map((player, index) => {
          let colorClass = "";
          let place = index + 1;

          if (index > 0 && player.points === players[index - 1].points) {
            // Если у текущего игрока и предыдущего игрока одинаковое количество баллов, используйте место предыдущего игрока
            place = index;
          }

          if (place === 1) {
            colorClass = cls.first;
          } else if (place === 2) {
            colorClass = cls.second;
          } else if (place === 3) {
            colorClass = cls.third;
          } else if (place === 4) {
            colorClass = cls.four;
          }

          return (
            <div key={index} className={`${cls.itemCon} ${cls[`place${place}`]}`}>
              <p className={cls.placeIcon}>
                <img className={cls.icon} src={`/icons/place${place}.svg`} alt="" />
              </p>
              <p className={`${cls.tList} ${colorClass}`}>{player.name}</p>
              <p className={`${cls.tList} ${colorClass}`}>{player.points}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}