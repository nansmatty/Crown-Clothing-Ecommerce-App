import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CategoryItem as TCategoryItem } from '../../store/categories/category.types';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';
import {
	Footer,
	Name,
	Price,
	ProductCardContainer,
} from './product-card.styles';

type ProductCardProps = {
	product: TCategoryItem;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
	const { name, price, imageUrl } = product;

	const dispatch = useDispatch();

	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button
				buttonType={BUTTON_TYPES_CLASSES.inverted}
				onClick={addProductToCart}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
