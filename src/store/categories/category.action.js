import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTIONS_TYPES } from './category.types';

export const setCategoriesMap = (categoriesMap) =>
	createAction(CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES_MAP, categoriesMap);
