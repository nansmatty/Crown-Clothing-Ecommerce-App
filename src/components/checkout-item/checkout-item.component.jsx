import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	const clearItemCart = () => deleteItemFromCart(cartItem);
	const increaseItemCart = () => addItemToCart(cartItem);
	const decreaseItemCart = () => removeItemFromCart(cartItem);

	return (
		<div className='checkout-item-container'>
			<div className='image-container'>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={decreaseItemCart}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={increaseItemCart}>
					&#10095;
				</div>
			</span>
			<span className='price'>${price}</span>
			<div className='remove-button' onClick={clearItemCart}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
