import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import axios from "./axios";

import Logo from "./Logo";
import Homepage from "./Homepage";
import Wishlist from "./Wishlist";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {}, []);

    return (
        <BrowserRouter>
            <div id="app-wrapper">
                <header>
                    <Logo />
                    <div className="title">
                        <h1>Plant Your Life</h1>
                        <p>make your home greener</p>
                    </div>
                    <nav>
                        <p>login</p>
                        <p>register</p>
                    </nav>
                    {/* <Login />
                        <Registration />
                        <NavBar /> */}
                </header>

                <div id="main-section">
                    <Route exact path="/" render={() => <Homepage />} />
                    <Route exact path="/wishlist" render={() => <Wishlist />} />
                </div>
            </div>
        </BrowserRouter>
    );
}
