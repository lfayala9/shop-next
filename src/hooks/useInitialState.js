import { useState } from "react";

const initialState = {
	cart: [],
	total: 0
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (item) => {
		setState({
			...state,
			cart: [...state.cart, item],
			total: state.total + item.price,
		});
	};

	const removeItem = (ids) =>{
		const removed = state.cart.splice(ids, 1)[0]

		setState({
			...state,
			cart: state.cart,
			totalPrice: state.totalPrice - removed.price
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