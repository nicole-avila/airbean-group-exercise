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
                order: totalOrder
            }
        case 'RESET':
            return{
                ...state,
                order: 0
            }
        default:
            return state
    }
}
export default reducer