import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllPlants, addToWishlist, removeFromWishlist } from "./actions";

export default function AllPlants() {
    const dispatch = useDispatch();
    const [flagWished, setFlagWished] = useState(false);

    let plants = useSelector((state) => state.allPlants && state.allPlants);
    let wishedPlants = useSelector(
        (state) => state.wishlist
        // state.allPlants &&
        // state.allPlants.filter((each) => each.wished == true)
    );

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);

    useEffect(() => {
        console.log("flagWished", flagWished);
    }, [flagWished]);

    let toggleWishlistIcon = (plant, plantWished) => {
        if (!plantWished) {
            setFlagWished(true);
            dispatch(addToWishlist(plant));
            console.log("toggler added to wishlist");
        } else {
            dispatch(removeFromWishlist(plant));
            setFlagWished(false);
            console.log("toggler removed from wishlist");
        }
    };

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
                                    <div
                                        id="wishIcon"
                                        className={
                                            plant.wished
                                                ? "wishIconActive"
                                                : "wishIconInactive"
                                        }
                                        onClick={() =>
                                            toggleWishlistIcon(
                                                plant,
                                                plant.wished
                                            )
                                        }
                                    >
                                        <i className="fas fa-heart"></i>
                                    </div>

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
                                        <div className="frontInfo">
                                            <div>
                                                type
                                                <p>{plant.type}</p>
                                            </div>
                                            {plant.pet_safe && (
                                                <div>pet safe</div>
                                            )}
                                            {plant.air_purifier && (
                                                <div>air purifier</div>
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div id="wishlist-sidebar">
                    <h3>wish list:</h3>
                    {wishedPlants && (
                        <div className="items">
                            {wishedPlants.map((wishplant) => (
                                <div
                                    key={wishplant.id}
                                    className="wishlistItem"
                                >
                                    <div className="img-container">
                                        <img
                                            src={
                                                wishplant.img_url ||
                                                "/fallback-plant.png"
                                            }
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src =
                                                    "/fallback-plant.png";
                                            }}
                                            alt={`${wishplant.common_name}`}
                                        />
                                    </div>
                                    <p>{wishplant.common_name}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
