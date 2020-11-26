import { filter } from "compression";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import WishlistSidebar from "./WishlistSidebar";

import Card from "./Card";

export default function Filtered() {
    // const dispatch = useDispatch();

    let plants = useSelector((state) => state.allPlants && state.allPlants);
    let filters = useSelector((state) => state.filters && state.filters);
    let filteredPlants = plants;

    //making sure that empty arrays appear falsy and filtered out (hide sections)
    // plants && plants.length == 0 && (plants = null);

    // useEffect(() => {
    //     // console.log("filters in new component!", filters);
    //     // filteredPlants = filters;
    // }, [filters]);

    // if (filters.type) {
    //     filteredPlants = indoorFilter.filter((plant) => {
    //         return plant.type == filters.type;
    //     });
    // }

    if (filters) {
        if (filters.indoor != "ignore") {
            filteredPlants = plants.filter((plant) => {
                return plant.indoor == filters.indoor;
            });
        }

        if (filters.type != "ignore") {
            filteredPlants = filteredPlants.filter((plant) => {
                return plant.type == filters.type;
            });
        }

        if (filters.pet_safe != "ignore") {
            filteredPlants = filteredPlants.filter((plant) => {
                return plant.pet_safe == filters.pet_safe;
            });
        }

        if (filters.air_purifier != "ignore") {
            filteredPlants = filteredPlants.filter((plant) => {
                return plant.air_purifier == filters.air_purifier;
            });
        }

        if (filters.difficulty != "ignore") {
            filteredPlants = filteredPlants.filter((plant) => {
                return plant.difficulty == filters.difficulty;
            });
        }
    }

    return (
        <>
            <div className="results-container">
                <div className="results-header">
                    <h2>
                        {filteredPlants && filteredPlants.length > 0
                            ? `We have found ${filteredPlants.length} matching results!`
                            : "Oops! no results found... you could start over or go back"}
                    </h2>
                    {/* <Link to="/advisor">
                        <button>start over</button>
                    </Link> */}
                </div>

                <div id="plantsList-wrapper">
                    {filteredPlants && (
                        <div className="plants-container">
                            <div className="items">
                                {filteredPlants.map((plant) => (
                                    <Card key={plant.id} plant={plant} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <WishlistSidebar />
        </>
    );
}
