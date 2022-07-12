import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTIONS_TYPES } from './cart.types';

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

const clearCartItem = (cartItems, itemToRemove) => {
	return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const setIsCartOpen = (boolean) =>
	createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
	const newCartItems = removeCartItem(cartItems, productToRemove);
	return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
	const newCartItems = clearCartItem(cartItems, itemToRemove);
	return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};
