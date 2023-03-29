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


export {addProduct, reset}
