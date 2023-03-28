function addProduct(value) {
    return {
        type: 'ADD_PRODUCT',
        payload: value
    }
}

export {addProduct}