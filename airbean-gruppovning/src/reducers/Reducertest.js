const initialState = {
    order: [],
    time: []
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
        case 'ADD__TIME':
            let minuts = state.time.concat(action.payload);
            return{
                ...state.time,
                time: minuts
        
            }
        default:
            return state
    }
}
export default reducer