import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
    addToWishlist,
    removeFromWishlist,
    showBack,
    showFront,
} from "./actions";

export default function Card({ plant }) {
    const dispatch = useDispatch();

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
    return (
        <div id="plant-card">
            <div
                id="frontSide"
                className={plant.flipped ? "flagHidden" : undefined}
                onClick={() => toggleCardSide(plant)}
            >
                <div
                    id="wishIcon"
                    className={
                        plant.wished ? "wishIconActive" : "wishIconInactive"
                    }
                    onClick={(e) => toggleWishlistIcon(e, plant)}
                >
                    <i className="fas fa-heart"></i>
                </div>
                <div className="img-container">
                    <img
                        src={plant.img_url || "/fallback-plant.png"}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/fallback-plant.png";
                        }}
                        alt={`${plant.common_name}`}
                    />
                </div>
                <div className="card-lower-container">
                    <h3>{plant.common_name}</h3>
                    <p>{plant.botanical_name}</p>
                    <div className="frontInfo">
                        <div className="plant-type">
                            <img
                                id="card-icon"
                                className={
                                    plant.type == "Foliage"
                                        ? "icon-highlight"
                                        : undefined
                                }
                                src="/assets/foliage.png"
                            />
                            <img
                                id="card-icon"
                                className={
                                    plant.type == "Flowering"
                                        ? "icon-highlight"
                                        : undefined
                                }
                                src="/assets/flowering.png"
                            />
                            <img
                                id="card-icon"
                                className={
                                    plant.type == "Succulents"
                                        ? "icon-highlight"
                                        : undefined
                                }
                                src="/assets/succulents.png"
                            />
                            <img
                                id="card-icon"
                                className={
                                    plant.type == "Edible"
                                        ? "icon-highlight"
                                        : undefined
                                }
                                src="/assets/edible.png"
                            />
                        </div>
                        <div className="pet-air">
                            {plant.pet_safe && (
                                <img
                                    id="card-icon"
                                    src="/assets/pet_safe.png"
                                />
                            )}
                            {plant.air_purifier && (
                                <img
                                    id="card-icon"
                                    src="/assets/air_purifier.png"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="backSide"
                className={plant.flipped ? undefined : "flagHidden"}
                onClick={() => toggleCardSide(plant)}
            >
                <p>watering {plant.watering}</p>
                <p>light {plant.light}</p>
                <p>{plant.indoor ? "indoor" : "outdoor"}</p>
                <p>temp range {plant.temp_range}</p>
                <p>max growth {plant.max_growth}</p>
                <p>difficulty {plant.difficulty}</p>
            </div>
        </div>
    );
}
