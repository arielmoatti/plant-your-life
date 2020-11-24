import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAllPlants } from "./actions";

import Card from "./Card";
import Wishlist from "./Wishlist";

export default function AllPlants() {
    const dispatch = useDispatch();
    const [wishlistToggled, setWishlistToggeled] = useState(false);

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);

    let toggleWishlistInAllPlants = () => {
        setWishlistToggeled(!wishlistToggled);
    };

    return (
        <>
            <Card />
            {/* {!wishlistToggled && <Wishlist />} */}
        </>
    );
}
