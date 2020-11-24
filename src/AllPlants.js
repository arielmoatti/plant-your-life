import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
    getAllPlants,
    addToWishlist,
    removeFromWishlist,
    showBack,
    showFront,
} from "./actions";

export default function AllPlants() {
    const dispatch = useDispatch();

    let plants = useSelector((state) => state.allPlants && state.allPlants);
    let wishedPlants = useSelector((state) => state.wishlist);

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);

    let toggleWishlistIcon = (e, plant) => {
        e.stopPropagation();
        if (!plant.wished) {
            dispatch(addToWishlist(plant));
        } else {
            dispatch(removeFromWishlist(plant));
        }
    };

    let toggleCardSide = (plant) => {
        console.log("class toggled!");
        if (!plant.flipped) {
            dispatch(showBack(plant.id));
        } else {
            dispatch(showFront(plant.id));
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
                                <div id="plant-card" key={plant.id}>
                                    <div
                                        id="frontSide"
                                        className={
                                            plant.flipped
                                                ? "flagHidden"
                                                : undefined
                                        }
                                        onClick={() => toggleCardSide(plant)}
                                    >
                                        <div
                                            id="wishIcon"
                                            className={
                                                plant.wished
                                                    ? "wishIconActive"
                                                    : "wishIconInactive"
                                            }
                                            onClick={(e) =>
                                                toggleWishlistIcon(e, plant)
                                            }
                                        >
                                            <i className="fas fa-heart"></i>
                                        </div>
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
                                        <div className="card-lower-container">
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
                                        </div>
                                    </div>
                                    <div
                                        id="backSide"
                                        className={
                                            plant.flipped
                                                ? undefined
                                                : "flagHidden"
                                        }
                                        onClick={() => toggleCardSide(plant)}
                                    >
                                        <p>first</p>
                                        <p>second</p>
                                        <p>third</p>
                                        <p>fourth</p>
                                    </div>
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
