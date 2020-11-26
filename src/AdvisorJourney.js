import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredResults } from "./actions";
import Filtered from "./Filtered";

export default function AdvisorJourney() {
    const dispatch = useDispatch();
    let filters = useSelector((state) => state.filters && state.filters);

    const [step, setStep] = useState(1);
    let [indoor, setIndoor] = useState("ignore");
    let [type, setType] = useState("ignore");
    let [pet, setPet] = useState("ignore");
    let [air, setAir] = useState("ignore");
    let [diff, setDiff] = useState("ignore");

    useEffect(() => {
        submit();
    }, [step, indoor, type, pet, air, diff, submit]);

    let submit = () => {
        dispatch(getFilteredResults(indoor, type, pet, air, diff));
    };

    let getCurrentDisplay = () => {
        // if (!step) {
        //     return null;
        // }

        switch (step) {
            case 1:
                return (
                    <div className="advisor-container">
                        <div className="question-box">
                            <div>
                                <h2>Let's begin with your location</h2>
                                <h3>Seems like you're in Berlin, Germany</h3>
                            </div>
                        </div>

                        <div className="advisor-btn-container">
                            <i
                                onClick={() => setStep(2)}
                                className="fas fa-chevron-circle-right advisor-nav"
                            ></i>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="advisor-container">
                        <div className="question-box">
                            <div className="advisor-left">
                                <h2>
                                    Do you plan to have it inside or in your
                                    balcony?
                                </h2>
                                <div className="advisor-icons-container">
                                    <img
                                        onClick={() => setIndoor(true)}
                                        id="advisor-icon"
                                        className={
                                            indoor == true
                                                ? "icon-highlight"
                                                : undefined
                                        }
                                        src="/assets/indoor.png"
                                    />
                                    <img
                                        onClick={() => setIndoor(false)}
                                        id="advisor-icon"
                                        className={
                                            indoor == false
                                                ? "icon-highlight"
                                                : undefined
                                        }
                                        src="/assets/outdoor.png"
                                    />
                                </div>
                                <i
                                    onClick={() => setIndoor("ignore")}
                                    className="far fa-window-close"
                                ></i>
                            </div>
                            <div className="advisor-right">
                                <h2>Are you fancy of a specific plant type?</h2>
                                <div className="advisor-icons-container">
                                    <img
                                        onClick={() => setType("Foliage")}
                                        id="advisor-icon"
                                        className={
                                            type == "Foliage"
                                                ? "icon-highlight"
                                                : undefined
                                        }
                                        src="/assets/foliage.png"
                                    />
                                    <img
                                        onClick={() => setType("Flowering")}
                                        id="advisor-icon"
                                        className={
                                            type == "Flowering"
                                                ? "icon-highlight"
                                                : undefined
                                        }
                                        src="/assets/flowering.png"
                                    />
                                    <img
                                        onClick={() => setType("Succulents")}
                                        id="advisor-icon"
                                        className={
                                            type == "Succulents"
                                                ? "icon-highlight"
                                                : undefined
                                        }
                                        src="/assets/succulents.png"
                                    />
                                    <img
                                        onClick={() => setType("Edible")}
                                        id="advisor-icon"
                                        className={
                                            type == "Edible"
                                                ? "icon-highlight"
                                                : undefined
                                        }
                                        src="/assets/edible.png"
                                    />
                                </div>
                                <i
                                    onClick={() => setType("ignore")}
                                    className="far fa-window-close"
                                ></i>
                            </div>
                        </div>

                        <div className="advisor-btn-container">
                            <i
                                onClick={() => setStep(1)}
                                className="fas fa-chevron-circle-left advisor-nav"
                            ></i>

                            <i
                                onClick={() => setStep(3)}
                                className="fas fa-chevron-circle-right advisor-nav"
                            ></i>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="advisor-container">
                        <div className="question-box">
                            <div className="advisor-left">
                                <h2>pet safe? air purifier?</h2>
                                <div className="advisor-opt-con">
                                    <p onClick={() => setPet(true)}>cat</p>
                                    <p onClick={() => setAir(true)}>air</p>
                                    <p
                                        onClick={() => {
                                            setPet("ignore");
                                            setAir("ignore");
                                        }}
                                    >
                                        reset
                                    </p>
                                </div>
                            </div>
                            <div className="advisor-right">
                                <h2>care intensity</h2>
                                <div className="advisor-opt-con">
                                    <p onClick={() => setDiff(1)}>easy</p>
                                    <p onClick={() => setDiff(2)}>medium</p>
                                    <p onClick={() => setDiff(3)}>hard</p>
                                    <p onClick={() => setDiff("ignore")}>
                                        reset
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="advisor-btn-container">
                            <i
                                onClick={() => setStep(2)}
                                className="fas fa-chevron-circle-left advisor-nav"
                            ></i>

                            <div
                                onClick={() => {
                                    setStep(4);
                                    setTimeout(() => {
                                        setStep(5);
                                    }, 3500);
                                }}
                                className="show-results"
                            >
                                <p>show results </p>
                                <i className="fas fa-seedling advisor-nav"></i>
                            </div>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <>
                        <div className="results-loader-container">
                            <h2>Getting the best matches for you...</h2>
                            <div className="img-container loading">
                                <img src="/assets/plant_animation.gif" />
                            </div>
                        </div>
                    </>
                );
            case 5:
                return (
                    <>
                        <div className="advisor-btn-container results">
                            <i
                                onClick={() => setStep(3)}
                                className="fas fa-chevron-circle-left advisor-nav"
                            ></i>

                            <i
                                onClick={() => {
                                    setIndoor("ignore");
                                    setType("ignore");
                                    setPet("ignore");
                                    setAir("ignore");
                                    setDiff("ignore");
                                    setStep(1);
                                }}
                                className="fas fa-redo advisor-nav"
                            ></i>
                        </div>
                        <Filtered />
                    </>
                );
        }
    };

    return <>{getCurrentDisplay()}</>;
}
