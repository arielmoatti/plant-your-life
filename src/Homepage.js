import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AllPlants from "./AllPlants";
import WishlistSidebar from "./WishlistSidebar";

export default function Homepage() {
    const dispatch = useDispatch();
    const [allPlantsToggled, setAllPlantsToggled] = useState(false);
    useEffect(() => {}, []);

    let toggleAllPlants = () => {
        setAllPlantsToggled(!allPlantsToggled);
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
                        {!allPlantsToggled
                            ? "see all plants"
                            : "hide full list"}
                    </button>
                    {allPlantsToggled && <AllPlants />}
                    <WishlistSidebar />
                </div>
            </div>
        </>
    );
}
