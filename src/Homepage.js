import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AllPlants from "./AllPlants";

export default function Homepage() {
    const dispatch = useDispatch();

    useEffect(() => {}, []);

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
                    <button>see all plants</button>
                    {/* <p>nothing special</p> */}
                    <AllPlants />
                </div>
            </div>
        </>
    );
}
