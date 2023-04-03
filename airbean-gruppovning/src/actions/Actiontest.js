function addProduct(value) {
    return {
        type: 'ADD_PRODUCT',
        payload: value
    }
}
function reset(value){
    return{
        type: 'RESET',
        payload: value
    }
}
function updateTime(value){
    return{
        type: 'UPDATE_TIME',
        payload: value
    }
}

function increase(value){
    return{
        type: 'INCREASE_AMOUNT',
        payload: value
    }
}

function decrease(value){
    return{
        type: 'DECREASE_AMOUNT',
        payload: value
    }
}


export {addProduct, reset, updateTime, decrease, increase}
