export default (state = {}, action) => {
    switch (action.type) {
        case "GET_LIST":
            return (state = Object.assign({}, state, {
                myRequests: action.myRequests,
                friendsWannabes: action.friendsWannabes,
            }));

        case "UNFRIENDED":
        case "REJECTED":
            return (state = {
                ...state,
                friendsWannabes: state.friendsWannabes.filter((member) => {
                    if (member.id == action.id) {
                        return;
                    } else {
                        return member;
                    }
                }),
            });

        case "ACCEPTED":
            return (state = {
                ...state,
                friendsWannabes: state.friendsWannabes.map((wannabe) => {
                    if (wannabe.id == action.id) {
                        return {
                            ...wannabe,
                            accepted: true,
                        };
                    } else {
                        return wannabe;
                    }
                }),
            });

        case "CANCELLED":
            return (state = {
                ...state,
                myRequests: state.myRequests.filter((pending) => {
                    if (pending.id == action.id) {
                        return;
                    } else {
                        return pending;
                    }
                }),
            });
        ///////////////////// MESSAGE BOARD /////////////////////
        case "RETRIEVED_MSGS":
            return (state = Object.assign({}, state, {
                boardMessages: action.msgsHistory,
            }));

        case "NEW_MSG":
            return (state = {
                ...state,
                boardMessages: [...state.boardMessages, action.newestMessage],
            });

        default:
            return state;
    }
};
