import React, { useEffect, useState } from "react";
import axios from "axios";
import cls from './Leaderboard.module.scss';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get("/players.json") // Замените путь на ваш JSON-файл
      .then((response) => {
        const playersData = response.data.players;

        // Найдем максимальное количество баллов (point + megapoint)
        const maxPoints = Math.max(...playersData.map(player => player.points + player.megapoint));

        // Найдем всех игроков с максимальным количеством баллов
        const maxPointsPlayers = playersData.filter(player => (player.points + player.megapoint) === maxPoints);

        setLeaders(maxPointsPlayers);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, []);

  return (
    <div className={cls.container}>
      <h2 className={cls.title}>Лидер рейтинга</h2>
      {leaders.length > 0 && (
        <div className={cls.iconBlock}>
          {leaders.map((leader, index) => (
            <div key={index} className={cls.iconCon}>
              <img className={cls.icon} src="/icons/winnercup.svg" alt="" />
              <p className={cls.txt}>{leader.name}</p>
              <img className={cls.icon} src="/icons/winnercup.svg" alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
