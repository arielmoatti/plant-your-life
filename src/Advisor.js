import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "./actions";

import Card from "./Card";
import AdvisorJourney from "./AdvisorJourney";

export default function Advisor() {
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);

    return (
        <>
            <div>
                <div className="advisor-wrapper">
                    <AdvisorJourney />
                </div>
            </div>
        </>
    );
}
