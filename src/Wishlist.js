import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

export default function Wishlist({ wishplant }) {
    // const dispatch = useDispatch();
    return (
        <div key={wishplant.id} className="wishlistItem">
            <div className="img-container">
                <img
                    src={wishplant.img_url || "/fallback-plant.png"}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/fallback-plant.png";
                    }}
                    alt={`${wishplant.common_name}`}
                />
            </div>
            <p>{wishplant.common_name}</p>
        </div>
    );
}
