import * as io from "socket.io-client";
// import { mbdbHistory, mbdbNewEntry } from "./actions";

export let socket;

export const init = (store) => {
    if (!socket) {
        socket = io.connect();
    } //end of IF block
};
