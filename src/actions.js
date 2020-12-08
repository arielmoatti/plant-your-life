import axios from "./axios";
import { useSelector } from "react-redux";

export async function getAllPlants() {
    try {
        const { data } = await axios.get("/api/plants");
        const ls = localStorage.getItem("saved-wishlist");

        if (ls && ls != "undefined") {
            // console.log("typeof", typeof ls);
            let parsedData = JSON.parse(ls);
            let wished_id = parsedData.map((each) => each.id);
            data.map((plant) => {
                if (wished_id.indexOf(plant.id) != -1) {
                    return (plant.wished = true);
                }
            });
        }

        return {
            type: "GET_ALL_PLANTS",
            allPlants: data,
        };
    } catch (err) {
        console.log(" ", err);
    }
}

export function addToWishlist(plant) {
    return {
        type: "ADDED_WISHLIST",

        plant,
    };
}

export function removeFromWishlist(plant) {
    return {
        type: "REMOVED_WISHLIST",
        plant,
    };
}

let arg = true;
export function triggerWishlist() {
    arg = !arg;
    return {
        type: "TRIGGER_WISHLIST",
        wlTriggered: arg,
    };
}

export function getFilteredResults(indoor, plantType, pet, air, diff) {
    return {
        type: "FILTERED_RESULTS",
        indoor,
        plantType,
        pet,
        air,
        diff,
    };
}
