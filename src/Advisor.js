import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "./actions";

import AdvisorJourney from "./AdvisorJourney";

export default function Advisor() {
    const dispatch = useDispatch();

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
