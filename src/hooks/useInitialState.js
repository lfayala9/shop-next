import { useState } from "react";

const initialState = {
	cart: [],
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
	};

	const removeItem = (ids) =>{
		const removed = state.cart.splice(ids, 1)[0]

		setState({
			...state,
			cart: state.cart
		})

		return removed
	}

	return {
		state,
		addToCart,
		removeItem
	}
}

export default useInitialState;