// eslint-disable-next-line

import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
	//find if cartItems contains productToAdd

	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	//If found, increment quantity

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	//Return new array with modifuied cartItems/ new cart item

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	//If found, decrement quantity

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === productToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const deleteCartItem = (cartItems, itemToRemove) => {
	return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	deleteItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

const INITIAL_STATE = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

const CART_ACTIONS_TYPES = {
	SET_CART_ITEMS: 'SET_CART_ITEMS',
	SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTIONS_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};

		default:
			throw new Error(`Unhandled type ${type} in cartReducer`);
	}
};

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

	const { cartItems, cartCount, cartTotal, isCartOpen } = state;

	const updateCartItemsReducer = (newCartItems) => {
		const newCartCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);

		const newCartTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);

		dispatch(
			createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, {
				cartItems: newCartItems,
				cartCount: newCartCount,
				cartTotal: newCartTotal,
			})
		);
	};

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = (productToRemove) => {
		const newCartItems = removeCartItem(cartItems, productToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const deleteItemFromCart = (itemToRemove) => {
		const newCartItems = deleteCartItem(cartItems, itemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const setIsCartOpen = (bool) => {
		dispatch(createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, bool));
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems,
		cartCount,
		cartTotal,
		removeItemFromCart,
		deleteItemFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
