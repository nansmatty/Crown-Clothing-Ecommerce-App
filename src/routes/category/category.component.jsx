import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
	const { category } = useParams();
	const categories = useSelector(selectCategoriesMap);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categories[category]);
	}, [category, categories]);

	return (
		<>
			<CategoryTitle>{category}</CategoryTitle>
			<CategoryContainer>
				{products?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</CategoryContainer>
		</>
	);
};

export default Category;
