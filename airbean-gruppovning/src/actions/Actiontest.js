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


export {addProduct, reset, updateTime}
