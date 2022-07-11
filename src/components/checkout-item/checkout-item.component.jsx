import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
	Arrow,
	BaseSpan,
	CheckoutItemContainer,
	ImageContainer,
	Quantity,
	RemoveButton,
	Value,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const { deleteItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);

	const clearItemCart = () => deleteItemFromCart(cartItem);
	const increaseItemCart = () => addItemToCart(cartItem);
	const decreaseItemCart = () => removeItemFromCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt={`${name}`} />
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<Quantity>
				<Arrow onClick={decreaseItemCart}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={increaseItemCart}>&#10095;</Arrow>
			</Quantity>
			<BaseSpan>${price}</BaseSpan>
			<RemoveButton onClick={clearItemCart}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
