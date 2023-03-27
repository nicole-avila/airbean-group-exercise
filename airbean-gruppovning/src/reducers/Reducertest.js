const initialState = {
    order: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return{
                ...state,
                order: state.order = action.payload
            }
            default:
                return state
    }
}
export default reducer