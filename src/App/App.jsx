import { Route, Routes } from "react-router";
import cls from "./App.module.scss";
import MainPage from "../pages/MainPage/MainPage";
import { Link } from "react-router-dom";
import PagesB from "../pages/PagesB/PagesB";
import PagesG from "../pages/PagesG/PagesG";
import PagesC from "../pages/PagesC/PagesC";
import PagesK from "../pages/PagesK/PagesK";
import PageInfo from "../pages/PageInfo/PageInfo";
import ArchivePage from "../pages/ArchivePage/ArchivePage";
import NewsPage from "../pages/NewsPage/NewsPage";
import AchievementsCard from "../components/AchievementsCard/AchievementsCard";
import AchievementsPage from "../pages/AchievementsPage/AchievementsPage";
import GameRules from "../components/GameRules/GameRules";
import RulesPages from './../pages/RulesPages/RulesPages';
import Achievements from "../components/Achievements/Achievements";

function App() {
    return (
        <>
            <div className={cls.App}>
                {/* <Routes>
                    <Route path="b" element={<PagesB/>}/>
                    <Route path="k" element={<PagesK/>}/>
                    <Route path="g" element={<PagesG/>}/>
                    <Route path="c" element={<PagesC/>}/>
                    <Route path="info" element={<PageInfo/>}/>
                    <Route path="/" element={<MainPage />} />
                    <Route path="archive" element={<ArchivePage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/rule" element={<RulesPages/>}/>
                    <Route path="/achiv" element={<AchievementsPage/>}/>
                </Routes> */}
            </div>
                <Achievements/>
        </>
    );
}

export default App;
