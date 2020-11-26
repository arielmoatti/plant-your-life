import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function AdvisorJourney() {
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);

    useEffect(() => {}, []);

    let getCurrentDisplay = () => {
        switch (step) {
            case 1:
                return (
                    <div className="questionBox">
                        <h2>step one</h2>
                        <button onClick={() => setStep(2)}>
                            continue to step 2
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className="questionBox">
                        <h2>step two</h2>
                        <button onClick={() => setStep(3)}>
                            continue to step 3
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className="questionBox">
                        <h2>final step</h2>
                    </div>
                );
        }
    };

    return <>{getCurrentDisplay()}</>;
}
