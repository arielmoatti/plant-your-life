import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
    addToWishlist,
    removeFromWishlist,
    showBack,
    showFront,
    triggerWishlist,
} from "./actions";

export default function Card({ plant }) {
    const dispatch = useDispatch();
    const [wishIconHover, setWishIconHover] = useState(false);

    let toggleWishlistIcon = (e, plant) => {
        e.stopPropagation();

        dispatch(triggerWishlist()); //to make sidebar disappear

        if (!plant.wished) {
            dispatch(addToWishlist(plant));
            setWishIconHover(false); //prevents changing to x after un-wish
        } else {
            dispatch(removeFromWishlist(plant));
        }
    };

    let toggleCardSide = (plant) => {
        if (!plant.flipped) {
            dispatch(showBack(plant.id));
        } else {
            dispatch(showFront(plant.id));
        }
    };
    return (
        <div id="plant-card" key={plant.id}>
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
                    onMouseEnter={() => plant.wished && setWishIconHover(true)}
                    onMouseLeave={() => plant.wished && setWishIconHover(false)}
                >
                    {wishIconHover ? (
                        <i
                            className={
                                plant.wished
                                    ? "far fa-times-circle"
                                    : "far fa-heart"
                            }
                        ></i>
                    ) : (
                        <i
                            className={
                                plant.wished ? "fas fa-heart" : "far fa-heart"
                            }
                        ></i>
                    )}
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
                                id="card-front-icon"
                                className={
                                    plant.type == "Foliage"
                                        ? "icon-highlight"
                                        : undefined
                                }
                                src="/assets/foliage.png"
                            />
                            <img
                                id="card-front-icon"
                                className={
                                    plant.type == "Flowering"
                                        ? "icon-highlight"
                                        : undefined
                                }
                                src="/assets/flowering.png"
                            />
                            <img
                                id="card-front-icon"
                                className={
                                    plant.type == "Succulents"
                                        ? "icon-highlight"
                                        : undefined
                                }
                                src="/assets/succulents.png"
                            />
                            <img
                                id="card-front-icon"
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
                                    id="card-front-icon"
                                    src="/assets/pet_safe.png"
                                />
                            )}
                            {plant.air_purifier && (
                                <img
                                    id="card-front-icon"
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
                <div id="back-card-top">
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
                    <h3>{plant.common_name}</h3>
                </div>
                <div className="grid-container">
                    <img
                        id="card-back-icon"
                        src={
                            plant.watering == 1
                                ? "/assets/watering_1.png"
                                : plant.watering == 2
                                ? "/assets/watering_2.png"
                                : "/assets/watering_3.png"
                        }
                    />
                    <img
                        id="card-back-icon"
                        src={
                            plant.light == 1
                                ? "/assets/light_1.png"
                                : plant.light == 2
                                ? "/assets/light_2.png"
                                : "/assets/light_3.png"
                        }
                    />
                    <img
                        id="card-back-icon"
                        src={
                            plant.indoor
                                ? "/assets/indoor.png"
                                : "/assets/outdoor.png"
                        }
                    />
                    <div className="temp-cont">
                        <img id="card-back-icon" src="/assets/temp.png" />
                        <p>{plant.temp_range} &#176;C</p>
                    </div>
                    <div className="growth-cont">
                        <img id="card-back-icon" src="/assets/max_growth.png" />
                        <p>{plant.max_growth} cm</p>
                    </div>
                    <div className="diff-cont">
                        <img
                            id="card-back-icon"
                            src={
                                plant.difficulty == 1
                                    ? "/assets/difficulty_1.png"
                                    : plant.difficulty == 2
                                    ? "/assets/difficulty_2.png"
                                    : "/assets/difficulty_3.png"
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
