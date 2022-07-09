import { Fragment, useContext } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContext } from '../../contexts/categories.context';
import './shop.styles.scss';

const Shop = () => {
	const { categoriesMap } = useContext(CategoryContext);

	return (
		<>
			{Object.keys(categoriesMap).map((title) => (
				<Fragment key={title}>
					<h2>{title}</h2>
					<div className='products-container'>
						{categoriesMap[title].map((product) => (
							<ProductCard key={product.id} product={product}></ProductCard>
						))}
					</div>
				</Fragment>
			))}
		</>
	);
};

export default Shop;
