import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "./actions";

import Card from "./Card";
import Wishlist from "./Wishlist";

export default function AllPlants() {
    const dispatch = useDispatch();

    let plants = useSelector((state) => state.allPlants && state.allPlants);
    let wishedPlants = useSelector((state) => state.wishlist);

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);

    //making sure that empty arrays appear falsy and filtered out (hide sections)
    plants && plants.length == 0 && (plants = null);

    return (
        <>
            <div id="plantsList-wrapper">
                {/* <h1>all the plants we love</h1> */}
                {plants && (
                    <div className="plants-container">
                        {/* <h2>in alphabetical order:</h2> */}
                        <div className="items">
                            {plants.map((plant) => (
                                <Card key={plant.id} plant={plant} />
                            ))}
                        </div>
                    </div>
                )}
                <div id="wishlist-sidebar">
                    <h3>wish list:</h3>
                    {wishedPlants && (
                        <div className="items">
                            {wishedPlants.map((wishplant) => (
                                <Wishlist
                                    key={wishplant.id}
                                    wishplant={wishplant}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
