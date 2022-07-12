import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

// to understand this login watch  the 162.reselect library video from udemy react course by ZTM

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categories) => categories.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {})
);

//Previous code

// export const selectCategoriesMap = (state) =>
// 	state.categories.categories.reduce((acc, category) => {
// 		const { title, items } = category;
// 		acc[title.toLowerCase()] = items;
// 		return acc;
// 	}, {});
