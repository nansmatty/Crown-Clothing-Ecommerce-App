import { createContext, useEffect, useState } from 'react';

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

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	deleteItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const totalPrice = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);

		setCartTotal(totalPrice);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const removeItemFromCart = (productToRemove) => {
		setCartItems(removeCartItem(cartItems, productToRemove));
	};

	const deleteItemFromCart = (itemToRemove) => {
		setCartItems(deleteCartItem(cartItems, itemToRemove));
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
