import React from "react";
import cls from "./CardsBlock.module.scss";

export default function CardsBlock() {
    return (
        <div className={cls.cards}>
            <div className={cls.card}>
                <div className={cls.cardHead}>
                    <div className={cls.avatar}>
                        <img src="/images/reibg.jpg" alt="" />
                    </div>
                    <div className={cls.nickName}> Gorbatic</div>
                </div>
                <div className={cls.cardInfo}>
                    <span>“Дыши,ни то умрёшь”</span>
                </div>
            </div>
            <div className={cls.card}>
                <div className={cls.cardHead}>
                    <div className={cls.avatar}>
                        <img src="/images/reibg.jpg" alt="" />
                    </div>
                    <div className={cls.nickName}> Gorbatic</div>
                </div>
                <div className={cls.cardInfo}>
                    <span>“Дыши,ни то умрёшь”</span>
                </div>
            </div>
            <div className={cls.card}>
                <div className={cls.cardHead}>
                    <div className={cls.avatar}>
                        <img src="/images/reibg.jpg" alt="" />
                    </div>
                    <div className={cls.nickName}> Gorbatic</div>
                </div>
                <div className={cls.cardInfo}>
                    <span>“Дыши,ни то умрёшь”</span>
                </div>
            </div>
            <div className={cls.card}>
                <div className={cls.cardHead}>
                    <div className={cls.avatar}>
                        <img src="/images/reibg.jpg" alt="" />
                    </div>
                    <div className={cls.nickName}> Gorbatic</div>
                </div>
                <div className={cls.cardInfo}>
                    <span>“Дыши,ни то умрёшь”</span>
                </div>
            </div>
        </div>
    );
}
