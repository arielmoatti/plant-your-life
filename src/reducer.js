export default (state = {}, action) => {
    switch (action.type) {
        case "GET_ALL_PLANTS":
            return (state = Object.assign({}, state, {
                allPlants: action.allPlants,
            }));

        case "ADDED_WISHLIST":
            return (state = {
                ...state,
                allPlants: state.allPlants.map((plant) => {
                    if (plant.id == action.id) {
                        return {
                            ...plant,
                            wished: true,
                        };
                    } else {
                        return plant;
                    }
                }),
            });

        default:
            return state;
    }
};
