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
        } else {
            console.log("indoor is ignored!");
        }

        if (filters.type != "ignore") {
            filteredPlants = filteredPlants.filter((plant) => {
                return plant.type == filters.type;
            });
        } else {
            console.log("type is ignored!");
        }

        if (filters.pet_safe != "ignore") {
            filteredPlants = filteredPlants.filter((plant) => {
                return plant.pet_safe == filters.pet_safe;
            });
        } else {
            console.log("pet_safe is ignored!");
        }

        if (filters.air_purifier != "ignore") {
            filteredPlants = filteredPlants.filter((plant) => {
                return plant.air_purifier == filters.air_purifier;
            });
        } else {
            console.log("air_purifier is ignored!");
        }
    }

    return (
        <>
            <div>
                <h1>
                    {filteredPlants && filteredPlants.length > 0
                        ? `we have found ${filteredPlants.length} matching results!`
                        : "no results found... start over or go back"}
                </h1>
                <Link to="/advisor">
                    <button>start over</button>
                </Link>
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
            <WishlistSidebar />
        </>
    );
}
