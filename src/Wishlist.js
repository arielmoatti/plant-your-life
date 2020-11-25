import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "./actions";
import Card from "./Card";

export default function Wishlist() {
    const dispatch = useDispatch();
    let wishedPlants = useSelector((state) => state.wishlist);

    //making sure that empty arrays appear falsy and filtered out (hide sections)
    // wishedPlants && wishedPlants.length == 0 && (wishedPlants = null);

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);

    useEffect(() => {
        wishedPlants &&
            localStorage.setItem(
                "saved-wishlist",
                JSON.stringify(wishedPlants)
            );
        // console.log("updating wishlist", wishedPlants);
    }, [wishedPlants]);

    return (
        <>
            <div id="wishlist-wrapper">
                {wishedPlants && (
                    <div className="wishlist-container">
                        <div className="items">
                            {wishedPlants.map((wishplant) => (
                                <Card key={wishplant.id} plant={wishplant} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
