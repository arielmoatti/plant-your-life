import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "./actions";

import Card from "./Card";

export default function Wishlist({ methodInApp }) {
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
    }, [wishedPlants]);

    return (
        <>
            {wishedPlants && wishedPlants.length == 0 && (
                <div className="wishlist-header">
                    <h1>Uh oh! your wish list is empty... {":( "}</h1>
                    <h3 className="btn">take me back</h3>
                    <Link to="/">
                        <i className="fas fa-chevron-circle-left wishlist-backbtn"></i>
                    </Link>
                </div>
            )}

            {wishedPlants && wishedPlants.length != 0 && (
                <div className="wishlist-header">
                    <h1>My plants wish list</h1>

                    <div onClick={methodInApp} className="share">
                        <i className="fab fa-whatsapp"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="far fa-envelope"></i>
                        <i className="far fa-file-pdf"></i>
                    </div>
                </div>
            )}

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
