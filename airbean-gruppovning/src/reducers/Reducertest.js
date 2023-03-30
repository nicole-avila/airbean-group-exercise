const initialState = {
    order: [],
    
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
        /* case 'ADD__TIME':
            
            return{
                ...state.time,
                time: state.time.concat(action.payload)
            } */
        default:
            return state
    }
}
export default reducer