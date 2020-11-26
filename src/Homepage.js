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
                    <h1>
                        We help you find the best plants
                        <br />
                        <br />
                        for you and your lifestyle.
                    </h1>
                    <p>
                        Our plant advisor is here to guide you through the
                        journey.
                    </p>
                    <Link to="/advisor">
                        <button>start plant advisor</button>
                    </Link>
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
