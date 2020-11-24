import axios from "./axios";
import { useSelector } from "react-redux";

export async function getAllPlants() {
    // let wishedPlants = useSelector((state) => state.wishlist);
    try {
        const { data } = await axios.get("/api/plants");
        // console.log("data", data);
        // console.log("action: get list of all plants ");
        return {
            type: "GET_ALL_PLANTS",
            allPlants: data,
            // wishedPlants,
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
        console.log("action: flag flipped to back");
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
        console.log("action: flag flipped to front");
        return {
            type: "FLIP_FRONT",
            id: plantId,
        };
    } catch (err) {
        console.log(" ", err);
    }
}

export async function getWishlishLocalS() {
    try {
        console.log("action: get wishlist from localStorage");
        const data = localStorage.getItem("saved-wishlist");
        let parsedData = JSON.parse(data);
        console.log("parsedData", parsedData);
        if (data) {
            return {
                type: "RETRIEVED_WISHLIST",
                savedWishlist: parsedData,
            };
        }
    } catch (err) {
        console.log(" ", err);
    }
}
