import React, { useEffect, useState } from "react";
import cls from "./RulesPages.module.scss";
import GameRules from "../../components/GameRules/GameRules";
import axios from "axios";
import Back from "../../components/Back/Back";

export default function RulesPages() {
    const [gameData, setGameData] = useState(null);

    useEffect(() => {
      axios
        .get("/rules.json")
        .then((response) => {
          setGameData(response.data);
        })
        .catch((error) => {
          console.error("Ошибка при загрузке данных:", error);
        });
    }, []);
  
    return (
      <div className={cls.container}>
        <Back/>
        {gameData && gameData.games && gameData.games.length > 0 ? (
          gameData.games.map((game, index) => (
            <GameRules key={index} gameData={game} />
          ))
        ) : (
          <p>Загрузка данных...</p>
        )}
      </div>
    );
  }