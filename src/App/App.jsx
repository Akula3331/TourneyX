import { Route, Routes } from "react-router";
import cls from "./App.module.scss";
import { useState } from "react";
import MainPage from "../pages/MainPage/MainPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <header className={cls.header}>
                <nav className={cls.navbar}>
                    <Link to="/">Main</Link>
                    <Link to="/profile">Profile</Link>
                </nav>
            </header>
            <div className={cls.App}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
