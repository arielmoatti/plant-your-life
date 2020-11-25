import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "./actions";

import Card from "./Card";

export default function AllPlants() {
    const dispatch = useDispatch();
    let plants = useSelector((state) => state.allPlants && state.allPlants);

    //making sure that empty arrays appear falsy and filtered out (hide sections)
    plants && plants.length == 0 && (plants = null);

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);

    return (
        <>
            <div id="plantsList-wrapper">
                {plants && (
                    <div className="plants-container">
                        <div className="items">
                            {plants.map((plant) => (
                                <Card key={plant.id} plant={plant} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
