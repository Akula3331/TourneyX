import React, { useState } from "react";
import TimeCon from "./../../components/TimeCon/TimeCon";
import CardsBlock from "./../../components/CardsBlock/CardsBlock";
import TourList from "./../../components/TourList/TourList";
import CountdownTimer from "./../../components/CountdownTimer/CountdownTimer";

export default function MainPage() {
    const [firstDateFromChild, setFirstDateFromChild] = useState(null);
    const handleFirstDateFromChild = (date) => {
        setFirstDateFromChild(date);
    };
    console.log(firstDateFromChild);
    let targetDate = null; // Изначально установите targetDate как null

    if (firstDateFromChild) {
        const dateParts = firstDateFromChild.split(".");
        if (dateParts.length === 3) {
            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T00:00:00`;
            targetDate = new Date(formattedDate);
        }
    }

    return (
        <div>
            <TimeCon onFirstDateFromChild={handleFirstDateFromChild} />
            <CardsBlock />
            <TourList />
            <CountdownTimer targetDate={targetDate} />
        </div>
    );
}
