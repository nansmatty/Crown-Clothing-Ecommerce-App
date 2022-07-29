import { CategoryItem } from '../../store/categories/category.types';
import ProductCard from '../product-card/product-card.component';
import {
	CategoryPreviewContainer,
	Preview,
	Title,
} from './category-preview.styles';

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
};

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
	title,
	products,
}) => {
	return (
		<CategoryPreviewContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</Preview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
