import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, BASE_URL } from "../utils/consts";
import axios from "axios";

const authContext = createContext();

export function useAuthContext() {
	return useContext(authContext);
}

const initialState = {
	user: null,
};

function reducer(state, action) {
	switch (action.type) {
		case ACTIONS.user:
			return { ...state, user: action.payload };

		default:
			return state;
	}
}

function AuthContext({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	async function register(credential) {
		try {
			await axios.post(`${BASE_URL}/auth/users/`, credential);
		} catch (error) {
			console.log(error);
		}
	}

	const value = {
		user: state.user,
		register,
	};
	return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthContext;
