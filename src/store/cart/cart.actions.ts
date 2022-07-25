import { CategoryItem } from '../categories/category.types';
import {
	createAction,
	ActionWithPayload,
	withMatcher,
} from '../../utils/reducer/reducer.utils';
import { CartItem, CART_ACTIONS_TYPES } from './cart.types';

const addCartItem = (
	cartItems: CartItem[],
	productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (
	cartItems: CartItem[],
	productToRemove: CategoryItem
): CartItem[] => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToRemove.id
	);

	//If found, decrement quantity

	if (existingCartItem && existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
	}
	return cartItems.map((cartItem) =>
		cartItem.id === productToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (
	cartItems: CartItem[],
	itemToRemove: CategoryItem
): CartItem[] => {
	return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export type SetIsCartOpen = ActionWithPayload<
	CART_ACTIONS_TYPES.SET_IS_CART_OPEN,
	boolean
>;

export type SetItemToCart = ActionWithPayload<
	CART_ACTIONS_TYPES.SET_CART_ITEMS,
	CartItem[]
>;

export const setIsCartOpen = withMatcher(
	(boolean: boolean): SetIsCartOpen =>
		createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
	(cartItems: CartItem[]): SetItemToCart =>
		createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
	cartItems: CartItem[],
	productToAdd: CategoryItem
): SetItemToCart => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return setCartItems(newCartItems);
};

export const removeItemFromCart = (
	cartItems: CartItem[],
	productToRemove: CategoryItem
): SetItemToCart => {
	const newCartItems = removeCartItem(cartItems, productToRemove);
	return setCartItems(newCartItems);
};

export const clearItemFromCart = (
	cartItems: CartItem[],
	itemToRemove: CategoryItem
): SetItemToCart => {
	const newCartItems = clearCartItem(cartItems, itemToRemove);
	return setCartItems(newCartItems);
};
