import { memo } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

type CartItemsProps = {
	cartItem: TCartItem;
};

const CartItem: React.FC<CartItemsProps> = memo(({ cartItem }) => {
	const { name, quantity, price, imageUrl } = cartItem;

	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetails>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x ${price}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
});

export default CartItem;
