import { useDispatch, useSelector } from 'react-redux';
import {
	Arrow,
	BaseSpan,
	CheckoutItemContainer,
	ImageContainer,
	Quantity,
	RemoveButton,
	Value,
} from './checkout-item.styles';
import {
	clearItemFromCart,
	addItemToCart,
	removeItemFromCart,
} from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { memo } from 'react';

type CheckoutItemProps = {
	cartItem: TCartItem;
};

const CheckoutItem: React.FC<CheckoutItemProps> = memo(({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;

	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	const clearItemCart = () => dispatch(clearItemFromCart(cartItems, cartItem));
	const increaseItemCart = () => dispatch(addItemToCart(cartItems, cartItem));
	const decreaseItemCart = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));

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
});

export default CheckoutItem;
