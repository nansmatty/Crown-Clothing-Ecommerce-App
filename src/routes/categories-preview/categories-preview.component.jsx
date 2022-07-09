import { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { CategoryContext } from '../../contexts/categories.context';

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoryContext);

	return (
		<>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];
				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</>
	);
};

export default CategoriesPreview;
