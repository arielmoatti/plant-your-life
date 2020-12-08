/* eslint-disable indent */
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

        case "TRIGGER_WISHLIST":
            return (state = {
                ...state,
                wlTriggered: action.wlTriggered,
            });

        case "FILTERED_RESULTS":
            return (state = {
                ...state,

                filters: {
                    ...state.filters,
                    indoor: action.indoor,
                    type: action.plantType,
                    pet_safe: action.pet,
                    air_purifier: action.air,
                    difficulty: action.diff,
                },
            });

        default:
            return state;
    }
};
