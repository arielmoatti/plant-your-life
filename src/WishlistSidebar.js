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
        let abort;
        (async () => {
            try {
                if (!abort) {
                    wishedPlants &&
                        localStorage.setItem(
                            "saved-wishlist",
                            JSON.stringify(wishedPlants)
                        );
                } else {
                    console.log("aborted!");
                }
            } catch (err) {
                console.log("error in axios GET /user/search: ", err);
            }
        })();
        // console.log("filters in Journey", filters);
        return () => {
            abort = true; //to make sure the results come in the right order, ignoring fast typing
        };
    }, [wishedPlants]);

    useEffect(() => {
        // console.log("wlTriggered", wlTriggered);
        let abort;
        (async () => {
            try {
                if (!abort) {
                    setSidebarVisible(true);
                    setTimeout(() => {
                        setSidebarVisible(false);
                    }, 2500);
                } else {
                    console.log("aborted!");
                }
            } catch (err) {
                console.log("error in axios GET /user/search: ", err);
            }
        })();
        // console.log("filters in Journey", filters);
        return () => {
            abort = true; //to make sure the results come in the right order, ignoring fast typing
        };
    }, [wlTriggered]);

    return (
        <>
            <div
                id="wishlist-sidebar"
                className={
                    wishedPlants && wishedPlants.length > 0
                        ? sidebarVisible
                            ? "sidebar-visible"
                            : "sidebar-hidden"
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
