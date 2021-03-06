import { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocument } from '../utils/firebase/firebase.utils.js';

const CategoryContext = createContext({
	categoriesMap: {},
});

const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocument();
			setCategoriesMap(categoryMap);
		};
		getCategoriesMap();
	}, []);

	const value = { categoriesMap };

	return (
		<CategoryContext.Provider value={value}>
			{children}
		</CategoryContext.Provider>
	);
};
