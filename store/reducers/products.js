import PRODUCTS from '../../data/dummy';

const initialState = {
    products: PRODUCTS,
}

const productReducer = (state=initialState, action) => {
    return state;
}

export default productReducer;
