const initialState = {
    number: 0
};

export const MainActions = {
    ADD_ONE: "ADD_ONE",
    MINUS_ONE: "MINUS_ONE"
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case MainActions.ADD_ONE:
            return {
                number: state.number + 1
            };
        case MainActions.MINUS_ONE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}
export default reducer;
