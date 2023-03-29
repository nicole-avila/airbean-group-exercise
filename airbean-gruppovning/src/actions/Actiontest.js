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
function addTime(value){
    return{
        type: 'ADD__TIME',
        payload: value
    }
}


export {addProduct, reset, addTime}
