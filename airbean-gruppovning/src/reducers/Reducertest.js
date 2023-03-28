const initialState = {
    order: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const totalOrder = state.order.concat(action.payload);
            console.log(totalOrder);
            return{
                ...state,
                order: totalOrder  /* state.order = action.payload */
            }
        default:
            return state
    }
}
export default reducer