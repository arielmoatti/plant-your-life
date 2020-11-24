export default (state = {}, action) => {
    switch (action.type) {
        case "GET_ALL_PLANTS":
            return (state = Object.assign({}, state, {
                wishlist: [
                    ...action.allPlants.filter((plant) => plant.wished == true),
                ],
                allPlants: action.allPlants,
            }));

        case "ADDED_WISHLIST":
            return (state = {
                ...state,
                wishlist: [...state.wishlist, action.plant],
                allPlants: state.allPlants.map((plant) => {
                    if (plant.id == action.plant.id) {
                        return {
                            ...plant,
                            wished: true,
                        };
                    } else {
                        return plant;
                    }
                }),
            });

        case "REMOVED_WISHLIST":
            return (state = {
                ...state,
                wishlist: [
                    ...state.wishlist.filter(
                        (plant) => plant.id != action.plant.id
                    ),
                ],
                allPlants: state.allPlants.map((plant) => {
                    if (plant.id == action.plant.id) {
                        return {
                            ...plant,
                            wished: false,
                        };
                    } else {
                        return plant;
                    }
                }),
            });

        case "FLIP_BACK":
            return (state = {
                ...state,
                allPlants: state.allPlants.map((plant) => {
                    if (plant.id == action.id) {
                        return {
                            ...plant,
                            flipped: true,
                        };
                    } else {
                        return plant;
                    }
                }),
            });

        case "FLIP_FRONT":
            return (state = {
                ...state,
                allPlants: state.allPlants.map((plant) => {
                    if (plant.id == action.id) {
                        return {
                            ...plant,
                            flipped: false,
                        };
                    } else {
                        return plant;
                    }
                }),
            });

        case "RETRIEVED_WISHLIST":
            return (state = {
                ...state,
                savedWishlist: action.savedWishlist,
            });

        default:
            return state;
    }
};
