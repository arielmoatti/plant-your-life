import React, { useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "./axios";

import { getAllPlants } from "./actions";
import Logo from "./Logo";
import Homepage from "./Homepage";
import Wishlist from "./Wishlist";
import Advisor from "./Advisor";

export default function App() {
    const dispatch = useDispatch();
    let wishedPlants = useSelector((state) => state.wishlist);

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);

    return (
        <BrowserRouter>
            <div id="app-wrapper">
                <header>
                    <div id="headerElem">
                        <Logo />
                        <div className="img-container">
                            <img
                                src="/header_cover.png"
                                className="headerImage"
                            />
                        </div>
                        <nav>
                            <Link to="/wishlist">
                                <div className="navWishlist">
                                    {wishedPlants && wishedPlants.length > 0 ? (
                                        <i className="fas fa-heart wishIconActive"></i>
                                    ) : (
                                        <i className="far fa-heart"></i>
                                    )}
                                </div>
                            </Link>
                            <p>login</p>
                            <p>register</p>
                        </nav>
                        {/* <Login />
                        <Registration />
                        <NavBar /> */}
                    </div>
                </header>

                <div id="main-section">
                    <Route exact path="/" render={() => <Homepage />} />
                    <Route exact path="/wishlist" render={() => <Wishlist />} />
                    <Route exact path="/advisor" render={() => <Advisor />} />
                </div>
            </div>
        </BrowserRouter>
    );
}
