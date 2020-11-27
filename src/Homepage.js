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
                    <h1>We help you find the best plants</h1>
                    <h1>for you and your lifestyle.</h1>
                    <p>Our plant advisor will guide you through the journey.</p>
                    <Link to="/advisor">
                        <button className="homepage-btn">
                            start plant advisor
                        </button>
                    </Link>
                </div>
                <div id="all-plants-wrapper">
                    <p>or see all plants</p>

                    <i
                        className={
                            !allPlantsToggled
                                ? "fas fa-chevron-circle-down arrow"
                                : "fas fa-chevron-circle-up arrow"
                        }
                        onClick={() => toggleAllPlants()}
                    ></i>

                    {allPlantsToggled && <AllPlants />}
                    <WishlistSidebar />
                </div>
            </div>
        </>
    );
}
