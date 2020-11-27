import React from "react";
import { Link } from "react-router-dom";

export default function Modal({ methodInApp }) {
    return (
        <>
            <div className="modal">
                <h3>
                    These options are available for registered users only.
                    <br />
                    Please take a moment to sign up, or simply log in
                </h3>
                <h2>
                    share your wish list, set various notifications for your
                    plants, get detailed information and useful care tips!
                </h2>
                <p>click here to register!</p>
                <button onClick={() => methodInApp()}>
                    maybe another time
                </button>
            </div>
        </>
    );
}
