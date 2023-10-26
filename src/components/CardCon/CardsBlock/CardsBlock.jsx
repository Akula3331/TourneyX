import React from "react";
import cls from "./CardsBlock.module.scss";
import ProfileCard from "../ProfileCard/ProfileCard";

export default function CardsBlock() {
    const cardData = [
        {
            img:'/images/kava.jpg',
            nick:'Kalamburger',
            txt:'Вильям Шекспир: "Весь мир – театр, а люди в нем актеры"',
            link:'/k',
            anim:'1'
        },
        {
            img:'/images/bava.jpg',
            nick:'Betito',
            txt:'Время – это то, что у нас всегда мало',
            link:'/b',
            anim:'2'
        },
        {
            img:'/images/gava.jpg',
            nick:'Gorbatic',
            txt:'Когда я читаю книгу то книга получает знания',
            link:'/g',
            anim:'3'
        },
        {
            img:'/images/cava.jpg',
            nick:'CFKN',
            txt:'Приятно быть важным,но куда важнее быть приятным',
            link:'/c',
            anim:'4'
        },
    ]

    return (
        <div className={cls.cards}>
            {cardData.map((item,index) => (
                <ProfileCard
                key={index}
                img={item.img}
                nick={item.nick}
                txt={item.txt}
                link={item.link}
                pendulumAnimation={item.anim}
                />
            ))}
        </div>
    );
}
