import React, { useEffect } from "react";

export default function Modal({ methodInApp }) {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                methodInApp();
            }
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <>
            <div className="modal">
                <h3>
                    These options are only available for registered users.
                    <br />
                    Please take a moment to sign up, or simply log in using the
                    menu above
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
