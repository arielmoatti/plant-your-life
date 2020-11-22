export default (state = {}, action) => {
    switch (action.type) {
        case "EMPTY":
            return (state = Object.assign({}, state, {}));

        default:
            return state;
    }
};
