import axios from "./axios";
import { useSelector } from "react-redux";

export async function getAllPlants() {
    // let wishedPlants = useSelector((state) => state.wishlist);
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

export async function addToWishlist(plant) {
    try {
        // console.log("action: add to wishlist ");
        return {
            type: "ADDED_WISHLIST",
            // id: id,
            plant,
        };
    } catch (err) {
        console.log(" ", err);
    }
}

export async function removeFromWishlist(plant) {
    try {
        // console.log("action: remove from wishlist ");
        return {
            type: "REMOVED_WISHLIST",
            plant,
        };
    } catch (err) {
        console.log(" ", err);
    }
}

export async function showBack(plantId) {
    try {
        // console.log("action: flag flipped to back");
        return {
            type: "FLIP_BACK",
            id: plantId,
        };
    } catch (err) {
        console.log(" ", err);
    }
}

export async function showFront(plantId) {
    try {
        // console.log("action: flag flipped to front");
        return {
            type: "FLIP_FRONT",
            id: plantId,
        };
    } catch (err) {
        console.log(" ", err);
    }
}
