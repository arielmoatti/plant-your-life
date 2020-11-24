import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getWishlishLocalS } from "./actions";

export default function Wishlist() {
    const dispatch = useDispatch();
    let wishedPlants = useSelector((state) => state.wishlist);

    // useEffect(() => {
    //     dispatch(getWishlishLocalS());
    // }, [wishedPlants]);

    useEffect(() => {
        localStorage.setItem("saved-wishlist", JSON.stringify(wishedPlants));
    }, [wishedPlants]);

    return (
        <>
            <div id="wishlist-sidebar">
                <h3>wish list:</h3>
                <div className="items">
                    {wishedPlants && (
                        <div>
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
