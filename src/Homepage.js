import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AllPlants from "./AllPlants";
import Wishlist from "./Wishlist";

export default function Homepage() {
    const dispatch = useDispatch();
    const [allPlantstoggled, setAllPlantsToggeled] = useState(false);
    useEffect(() => {}, []);

    let toggleAllPlants = () => {
        setAllPlantsToggeled(!allPlantstoggled);
    };

    return (
        <>
            <div id="homepage-wrapper">
                <div className="welcome-bubble">
                    <p>
                        Welcome to Plant Your Life - let us help you find the
                        plants which best fit your needs - geographic location,
                        apartment space and personal lifestyle. Our plant
                        advisor is here to guide you through your plant-planning
                        journey
                    </p>
                    <button>start plants advisor</button>
                </div>
                <div id="all-plants-wrapper">
                    <p>or if you prefer, </p>
                    <button
                        className="btnShowAllPlants"
                        onClick={() => toggleAllPlants()}
                    >
                        {!allPlantstoggled
                            ? "see all plants"
                            : "hide full list"}
                    </button>
                    {allPlantstoggled && <AllPlants />}
                    <Wishlist />
                </div>
            </div>
        </>
    );
}
