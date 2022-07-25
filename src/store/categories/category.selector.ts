import { createSelector } from 'reselect';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';
import { RootState } from '../store';

const selectCategoryReducer = (state: RootState): CategoriesState =>
	state.categories;

// to understand this login watch  the 162.reselect library video from udemy react course by ZTM

export const selectCategoriesIsLoading = createSelector(
	[selectCategoryReducer],
	(categories) => categories.isLoading
);

export const selectCategories = createSelector(
	[selectCategoryReducer],
	(categories) => categories.categories
);

export const selectCategoriesMap = createSelector(
	[selectCategories],
	(categories): CategoryMap =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title.toLowerCase()] = items;
			return acc;
		}, {} as CategoryMap)
);

//Previous code

// export const selectCategoriesMap = (state) =>
// 	state.categories.categories.reduce((acc, category) => {
// 		const { title, items } = category;
// 		acc[title.toLowerCase()] = items;
// 		return acc;
// 	}, {});
