import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllPlants } from "./actions";
import Logo from "./Logo";
import Homepage from "./Homepage";
import Wishlist from "./Wishlist";
import Advisor from "./Advisor";
import Filtered from "./Filtered";
import Modal from "./Modal";

export default function App() {
    const dispatch = useDispatch();
    let wishedPlants = useSelector((state) => state.wishlist);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        dispatch(getAllPlants());
    }, []);

    let methodInApp = () => {
        setModalVisible(!modalVisible);
    };

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
                    <Route
                        exact
                        path="/wishlist"
                        render={() => <Wishlist methodInApp={methodInApp} />}
                    />
                    <Route exact path="/advisor" render={() => <Advisor />} />
                    <Route exact path="/results" render={() => <Filtered />} />
                    {modalVisible && (
                        <>
                            <div
                                className="overlay"
                                onClick={methodInApp}
                            ></div>

                            <Modal methodInApp={methodInApp} />
                        </>
                    )}
                </div>
            </div>
        </BrowserRouter>
    );
}
