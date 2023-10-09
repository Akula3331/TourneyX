import React from "react";
import cls from "./TourList.module.scss";
export default function TourList() {
    return (
        <div className={cls.TourList}>
            <div className={cls.head}>
                <div className={cls.icon}>
                    <img src="/icons/cup.svg" alt="" />
                </div>
                <div className={cls.title}>Топ мини-турниров</div>
            </div>
            <ol className={cls.table}>
                <li className={cls.tableName}>Место</li>
                <li className={cls.tableName}>Игрок</li>
                <li className={cls.tableName}>Очки</li>
                <li className={cls.placeIcon}>
                    <img src="/icons/1place.svg" alt="" />
                </li>
                <li>5</li>
                <li>6</li>
                <li className={cls.placeIcon}>
                    <img src="/icons/2place.svg" alt="" />
                </li>
                <li>8</li>
                <li>9</li>
                <li className={cls.placeIcon}>
                    <img src="/icons/3place.svg" alt="" />
                </li>
                <li>11</li>
                <li>12</li>
                <li>
                    <img src="/icons/4place.svg" alt="" />
                </li>
                <li>14</li>
                <li>15</li>
            </ol>
        </div>
    );
}
