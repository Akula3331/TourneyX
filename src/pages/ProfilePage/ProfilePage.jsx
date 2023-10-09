import React from "react";
import cls from "./ProfilePage.module.scss";

export default function ProfilePage() {
    return (
        <section className={cls.profile}>
            <div className={cls.head}>
                <div className={cls.avatar}>
                    <img src="/images/datebg.jpg" />
                </div>
                <div className={cls.about}>
                    <div className={cls.nickName}>Jopka</div>
                    <div className={cls.info}>
                        Geng bang 225 lorem50dsfdsvbdfvdfnvkjxcn
                        nksdjnvlksndlkvm xclm xdij lknmsdkm
                    </div>
                </div>
            </div>
            <div className={cls.body}>
                <div className={cls.aside}>
                    <h2>
                        <img src="/icons/winnercup.svg" /> Достижения
                    </h2>
                    <ul>
                        <li>1 Достижения</li>
                        <li>2 Достижения</li>
                        <li>3 Достижения</li>
                        <li>4 Достижения</li>
                    </ul>
                </div>
                <div className={cls.content}>контент</div>
            </div>
        </section>
    );
}
