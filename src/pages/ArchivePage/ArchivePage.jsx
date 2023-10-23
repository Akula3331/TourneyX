import React, { useState } from "react";
import cls from "./ArchivePage.module.scss";
import SeasonGamesList from './../../components/SeasonGamesList/SeasonGamesList';
import Back from "../../components/Back/Back";

export default function ArchivePage() {
  const gamesSeason = [
    { name: "Покер", date: "2023-10-12", firstPlace: 'Kalamburger', secondPlace: 'Betito', thirdPlace: 'Gorbatic', fourthPlace: 'CFKN' },
    { name: "Дурак", date: "2023-10-14", firstPlace: 'Gorbatic', secondPlace: 'Betito', thirdPlace: 'CFKN', fourthPlace: 'Kalamburger' },
    { name: "Шашки", date: "2023-10-16", firstPlace: 'Betito', secondPlace: 'CFKN', thirdPlace: 'Kalamburger', fourthPlace: 'Gorbatic' },
    { name: "Дурак", date: "2023-10-18", firstPlace: 'Kalamburger', secondPlace: 'CFKN', thirdPlace: 'Gorbatic', fourthPlace: 'Betito' },
    { name: "Uno", date: "2023-10-20", firstPlace: 'Betito', secondPlace: 'Gorbatic', thirdPlace: 'CFKN', fourthPlace: 'Kalamburger' },
    { name: "Ping Pong", date: "2023-10-23", firstPlace: 'Kalamburger', secondPlace: 'CFKN', thirdPlace: 'Gorbatic', fourthPlace: 'Betito' },
   
  ];

  const gamesAll = [
    
  ];

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [viewMode, setViewMode] = useState("season");
  const [openGameIndex, setOpenGameIndex] = useState(-1);

  const getGamesToDisplay = () => {
    const games = viewMode === "season" ? gamesSeason : gamesAll;

    const sortedGames = [...games].sort((a, b) => {
      const result = sortOrder === "asc" ? 1 : -1;

      if (sortBy === "date") {
        return result * (new Date(b.date) - new Date(a.date));
      } else if (sortBy === "name") {
        return result * a.name.localeCompare(b.name);
      }
    });

    return sortedGames.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleContainerClick = (index) => {
    if (openGameIndex === index) {
      setOpenGameIndex(-1);
    } else {
      setOpenGameIndex(index);
    }
  };

  return (
    <div className={cls.container}>
         <Back/>
      <h2 className={cls.title}>Архив игр</h2>
      <div className={cls.con}>
        <input
          type="text"
          id="text"
          name="text"
          className={cls.input}
          placeholder="Фильтровать по названию"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={cls.select}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={cls.dropCon}
          >
            <option className={cls.drop} value="date">
              Сортировать по дате
            </option>
            <option className={cls.drop} value="name">
              Сортировать по названию
            </option>
          </select>
          <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
            {sortOrder === "asc" ? "▼" : "▲"}
          </button>
        </div>
      </div>
      <div className={cls.btnCon}>
        <button
          className={`${cls.btn} ${viewMode === "games" ? cls.active : ""}`}
          onClick={() => setViewMode("games")}
          disabled={viewMode === "games"}
        >
          Игры
        </button>
        <button
          className={`${cls.btn} ${viewMode === "season" ? cls.active : ""}`}
          onClick={() => setViewMode("season")}
          disabled={viewMode === "season"}
        >
          За сезон
        </button>
      </div>
      {getGamesToDisplay().map((game, index) => (
        <SeasonGamesList
          key={index}
          name={game.name}
          date={game.date}
          firstPlace={game.firstPlace}
          secondPlace={game.secondPlace}
          thirdPlace={game.thirdPlace}
          fourthPlace={game.fourthPlace}
          onToggle={() => handleContainerClick(index)}
          isOpen={openGameIndex === index}
        />
      ))}
    </div>
  );
}
