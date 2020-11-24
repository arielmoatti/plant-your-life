import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AllPlants from "./AllPlants";

export default function Homepage() {
    const dispatch = useDispatch();
    const [allPlantstoggled, setAllPlantsToggeld] = useState(false);
    useEffect(() => {}, []);

    let toggleAllPlants = () => {
        setAllPlantsToggeld(!allPlantstoggled);
        console.log("allPlantstoggled", allPlantstoggled);
    };

    return (
        <>
            <div id="homepage-wrapper">
                <div className="welcome-bubble">
                    <p>
                        let us help you find the plants which best fit your
                        needs - geographic location, apartment space and
                        personal lifestyle. Our plant advisor is here to guide
                        you through your plant-planning journey
                    </p>
                    <button>start plants advisor</button>
                </div>
                <div id="all-plants-wrapper">
                    <button onClick={() => toggleAllPlants()}>
                        {!allPlantstoggled
                            ? "see all plants"
                            : "hide full list"}
                    </button>
                    {allPlantstoggled && <AllPlants />}
                </div>
            </div>
        </>
    );
}
