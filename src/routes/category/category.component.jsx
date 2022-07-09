import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContext } from '../../contexts/categories.context';
import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoryContext);

	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<>
			<CategoryTitle>{category}</CategoryTitle>
			<CategoryContainer className='category-container'>
				{products?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</CategoryContainer>
		</>
	);
};

export default Category;
