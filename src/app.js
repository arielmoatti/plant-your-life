import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "./axios";

import Logo from "./Logo";
import Homepage from "./Homepage";

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        // (async () => {
        //     try {
        //         let response = await axios.get("/api/user");
        //         const { id, first, last, avatar, bio } = response.data.rows;
        //         this.setState({
        //             id: id,
        //             first: first,
        //             last: last,
        //             profilePicUrl: avatar,
        //             bio: bio,
        //         });
        //     } catch (err) {
        //         console.log("error in axios GET /api/user: ", err);
        //     }
        // })();
    }, []);

    return (
        <>
            <BrowserRouter>
                <div id="app-wrapper">
                    <header>
                        <Logo />
                        <h1>plant your life title here</h1>
                        <nav>
                            <p>login</p>
                            <p>register</p>
                            <p>menu</p>
                        </nav>
                        {/* <Login />
                        <Registration />
                        <NavBar /> */}
                    </header>

                    <div id="main-section">
                        <Route exact path="/" render={() => <Homepage />} />
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}
