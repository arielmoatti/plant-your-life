import React from "react";
import ReactDOM from "react-dom";

// import Welcome from "./welcome";
import App from "./app";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import { init } from "./socket";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(reduxPromise))
);

let elem;
//////////////
/*
import { Provider, useDispatch } from "react-redux";
import { getAllPlants } from "./actions";
const dispatch = useDispatch();
dispatch(getAllPlants());
*/
///////////////

// const userIsLoggedIn = location.pathname != "/welcome";

// if (!userIsLoggedIn) {
//     elem = <Welcome />;
// } else {
init(store); //we pass the sockets the global redux store
elem = (
    <Provider store={store}>
        <App />
    </Provider>
);
// }

ReactDOM.render(elem, document.querySelector("main"));
