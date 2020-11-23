import axios from "./axios";

export async function getAllPlants() {
    try {
        const { data } = await axios.get("/api/plants");
        // console.log("data", data);
        // console.log("action: get list of all plants ");
        return {
            type: "GET_ALL_PLANTS",
            allPlants: data,
        };
    } catch (err) {
        console.log(" ", err);
    }
}

export async function addToWishlist(id) {
    try {
        console.log("action: add to list ");
        return {
            type: "ADDED_WISHLIST",
            id: id,
        };
    } catch (err) {
        console.log(" ", err);
    }
}
