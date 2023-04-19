import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, BASE_URL } from "../utils/consts";
import $axios from "../utils/axios";

export const productContext = createContext();

export function useProductContext() {
	return useContext(productContext);
}
const initState = {
	products: [],
	oneProduct: null,
	categories: [],
};

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.products:
			return { ...state, products: action.payload };
		case ACTIONS.categories:
			return { ...state, categories: action.payload };
		case ACTIONS.oneProduct:
			return { ...state, oneProduct: action.payload };
		default:
			return state;
	}
}
function ProductContext({ children }) {
	const [state, dispatch] = useReducer(reducer, initState);

	return (
		<productContext.Provider value={value}>{children}</productContext.Provider>
	);
}

export default ProductContext;
