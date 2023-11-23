import React, { useEffect, useState } from "react";
import cls from "./PagesK.module.scss";
import GameList from "../../components/Profile/GameList/GameList";
import Achievements from "../../components/Achievements/Achievements";
import axios from "axios";

export default function PagesK() {
  const [achivData, setAchivData] = useState(null);
  useEffect(() => {
    axios
      .get("/achiv.json")
      .then((response) => {
        setAchivData(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, []);
  return (
    <div className={cls.container}>
      <div className={cls.conHeader}>
        <div className={cls.avaCon}>
          <img src="/images/kava.jpg" alt="" />
        </div>
        <div className={cls.itemCon}>
          <div className={cls.profile}>
            <p className={cls.profItem}>Kalamburger</p>
            <p className={cls.profItem}>Возраст: 20</p>
          </div>
        </div>
      </div>
      {/* <div className={cls.titulCon}> */}
      {/* {achivData && achivData.achiv ? <Achievements achiv={achivData} /> : <p>Loading...</p>}
       */}
       {/* <Achievements achiv={[{ icon: "/icons/achiv/ten.png", name: "Щитовой Защитник", txt: "Не отдавать 1-е место 10 игр подряд", rary: "advanced" }]} /> */}



      {/* </div> */}
      <div className={cls.listGame}>
        <GameList playerName="Kalamburger" />
      </div>
    </div>
  );
}
