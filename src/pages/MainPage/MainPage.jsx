import React, { useState } from "react";
import TimeCon from "./../../components/TimeCon/TimeCon";
import CardsBlock from "./../../components/CardsBlock/CardsBlock";
import TourList from "./../../components/TourList/TourList";
import CountdownTimer from "./../../components/CountdownTimer/CountdownTimer";
import cls from "./MainPage.module.scss";
import { Link } from "react-router-dom";
import Leaderboard from "./../../components/Leaderboard/Leaderboard";

export default function MainPage() {
  const [firstDateFromChild, setFirstDateFromChild] = useState(null);
  const [gameName, setGameName] = useState("");
  const handleFirstDateFromChild = (date, gameName) => {
    setFirstDateFromChild(date);
    // Добавьте название игры в состояние или передайте его другим компонентам
    setGameName(gameName);
  };
  console.log(gameName);
  let targetDate = null; // Изначально установите targetDate как null

  if (firstDateFromChild) {
    const dateParts = firstDateFromChild.split(".");
    if (dateParts.length === 3) {
      const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T20:30:00`;
      targetDate = new Date(formattedDate);
    }
  }

  return (
    <div className={cls.container}>
      <header id="hed" className={cls.header}>
        <nav className={cls.navbar}>
          <Link className={cls.link} to="/rule">
            <img src="/icons/head/medalicon.svg" alt="icon" />
            <p className={cls.headerTxt}>Правила</p>
          </Link>
          <Link className={cls.link} to="/info">
            <img src="/icons/head/info.svg" alt="icon" />
            <p className={cls.headerTxt}>Инструкция</p>
          </Link>
          <Link className={cls.link} to="/archive">
            <img src="/icons/head/archive.svg" alt="icon" />
            <p className={cls.headerTxt}>Архив игр</p>
          </Link>
          <Link className={cls.link} to="/news">
            <img src="/icons/head/news.svg" alt="icon" />
            <p className={cls.headerTxt}>Новости</p>
          </Link>
        </nav>
      </header>
      <div className={cls.newsItem}>
      <p>Был добавлен новый ивент</p>
      <p>Информация о нем в Инструкции</p>
      </div>
      <div className={cls.main}>
        <CountdownTimer targetDate={new Date("2023-11-14T00:00:00")} text='Отсчет до глобального турнира'/>
      </div>
      <div className={cls.taimer}>
        <CountdownTimer targetDate={targetDate} name={gameName} text='Время доказать свои навыки: начало близко!' />
      </div>
      <TimeCon onFirstDateFromChild={handleFirstDateFromChild} />
      <div className={cls.tourCon}>
        <Leaderboard />
        <TourList />
      </div>
      <Link className={cls.dostCon} to="/achiv">
        <img className={cls.dostImg} src="/images/dost.jpg" alt="" />
      </Link>
      <CardsBlock />
      <div className={cls.block}></div>
    </div>
  );
}
