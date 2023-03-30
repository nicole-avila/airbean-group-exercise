const initialState = {
    order: [],
    orderNr: ''
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
                order: state.order = []  
            }
        case 'UPDATE_TIME':
            return{
                ...state,
                orderNr: action.payload
            
            }
            default:
                return state
            }
        }
export default reducer