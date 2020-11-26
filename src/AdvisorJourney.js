import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredResults } from "./actions";

export default function AdvisorJourney() {
    const dispatch = useDispatch();
    let filters = useSelector((state) => state.filters && state.filters);

    const [step, setStep] = useState(1);
    let [indoor, setIndoor] = useState("ignore");
    let [type, setType] = useState("ignore");
    let [pet, setPet] = useState("ignore");
    let [air, setAir] = useState("ignore");

    useEffect(() => {
        let abort;
        (async () => {
            try {
                if (!abort) {
                    submit();
                } else {
                    console.log("aborted!");
                }
            } catch (err) {
                console.log("error in axios GET /user/search: ", err);
            }
        })();
        // console.log("filters in Journey", filters);
        return () => {
            abort = true; //to make sure the results come in the right order, ignoring fast typing
        };
    }, [step, indoor, type, pet, air, submit]);

    let submit = () => {
        dispatch(getFilteredResults(indoor, type, pet, air));
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
                            <button
                                className="advisor-nav"
                                onClick={() => setStep(2)}
                            >
                                continue
                            </button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="advisor-container">
                        <div className="question-box">
                            <div className="advisor-left">
                                <h3>
                                    Some plants can very well thrive indoors,
                                    some are blacony-proof. Do you plan to have
                                    it indoors or outdoors?
                                </h3>
                                <p>
                                    {filters.indoor == true
                                        ? "true"
                                        : filters.indoor == "ignore"
                                        ? "ignore"
                                        : "false"}
                                </p>
                                <div className="advisor-opt-con">
                                    <p onClick={() => setIndoor(true)}>
                                        indoor
                                    </p>
                                    <p onClick={() => setIndoor(false)}>
                                        outdoor
                                    </p>
                                    <p onClick={() => setIndoor("ignore")}>
                                        reset
                                    </p>
                                </div>
                            </div>
                            <div className="advisor-right">
                                <h3>Are you fancy of a specific plant type?</h3>
                                <p>{filters.type}</p>
                                <div className="advisor-opt-con">
                                    <p onClick={() => setType("Foliage")}>
                                        Foliage
                                    </p>
                                    <p onClick={() => setType("Flowering")}>
                                        Flowering
                                    </p>
                                    <p onClick={() => setType("Succulents")}>
                                        Succulents
                                    </p>
                                    <p onClick={() => setType("Edible")}>
                                        Edible
                                    </p>
                                    <p onClick={() => setType("ignore")}>
                                        reset
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="advisor-btn-container">
                            <button
                                className="advisor-nav"
                                onClick={() => setStep(1)}
                            >
                                back
                            </button>
                            <button
                                className="advisor-nav"
                                onClick={() => setStep(3)}
                            >
                                continue
                            </button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="advisor-container">
                        <div className="question-box">
                            <div className="advisor-left">
                                <h3>pet safe? air purifier?</h3>
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
                                <h3>care intensity</h3>
                            </div>
                        </div>

                        <div className="advisor-btn-container">
                            <button
                                className="advisor-nav"
                                onClick={() => setStep(2)}
                            >
                                back
                            </button>
                            <Link to="/results">
                                <h1 className="advisor-nav">results</h1>
                            </Link>
                        </div>
                    </div>
                );
        }
    };

    return <>{getCurrentDisplay()}</>;
}
