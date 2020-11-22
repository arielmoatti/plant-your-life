import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// import { getList, unfriend, accept, reject, cancel } from "./actions";

export default function Homepage() {
    const dispatch = useDispatch();

    useEffect(() => {}, []);

    return (
        <>
            <div id="homepage-wrapper">
                <h2>welcome to plant your life!</h2>
            </div>
        </>
    );
}
