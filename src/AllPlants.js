import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllPlants, addToWishlist } from "./actions";

export default function AllPlants() {
    const dispatch = useDispatch();

    let plants = useSelector((state) => state.allPlants && state.allPlants);
    let wishedPlants = useSelector(
        (state) =>
            state.allPlants &&
            state.allPlants.filter((each) => each.wished == true)
    );

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);
    //making sure that empty arrays appear falsy and filtered out (hide sections)
    plants && plants.length == 0 && (plants = null);

    return (
        <>
            <div id="plantsList-wrapper">
                <h1>all the plants we love</h1>
                {plants && (
                    <div className="plants-container">
                        <h2>in alphabetical order:</h2>
                        <div className="items">
                            {plants.map((plant) => (
                                <div className="plant-card" key={plant.id}>
                                    <button
                                        name="wishlist"
                                        onClick={() =>
                                            dispatch(addToWishlist(plant.id))
                                        }
                                    >
                                        <i className="fas fa-heart"></i>
                                    </button>

                                    <Link to={`/plant/${plant.id}`}>
                                        <div className="img-container">
                                            <img
                                                src={
                                                    plant.img_url ||
                                                    "/fallback-plant.png"
                                                }
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src =
                                                        "/fallback-plant.png";
                                                }}
                                                alt={`${plant.common_name}`}
                                            />
                                        </div>

                                        <h3>{plant.common_name}</h3>
                                        <p>{plant.botanical_name}</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div id="wishlist-sidebar">
                    <h3>wish list:</h3>
                    {wishedPlants && (
                        <div>
                            {wishedPlants.map((wishplant) => (
                                <p key={wishplant.id}>
                                    {wishplant.common_name}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
