import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getWishlishLocalS } from "./actions";

export default function WishlistSidebar() {
    const dispatch = useDispatch();
    let wishedPlants = useSelector((state) => state.wishlist);
    let wlTriggered = useSelector((state) => state.wlTriggered);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    useEffect(() => {
        wishedPlants &&
            localStorage.setItem(
                "saved-wishlist",
                JSON.stringify(wishedPlants)
            );
        // console.log("updating wishlist", wishedPlants);
        // setSidebarVisible(false);
        // console.log("sidebarVisible", sidebarVisible);
        // setTimeout(() => {
        //     setSidebarVisible(true);
        //     console.log("sidebarVisible", sidebarVisible);
        // }, 1500);
    }, [wishedPlants]);

    useEffect(() => {
        console.log("wlTriggered", wlTriggered);
    }, [wlTriggered]);

    return (
        <>
            <div
                id="wishlist-sidebar"
                className={
                    wishedPlants && wishedPlants.length > 0
                        ? "sidebar-visible"
                        : "sidebar-hidden"
                }
            >
                <h3>my wish list</h3>
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
