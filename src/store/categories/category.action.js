import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils';
import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTIONS_TYPES } from './category.types';

const fetchCategoriesStart = () =>
	createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_START);

const fetchCategoriesSuccess = (categoriesArray) =>
	createAction(
		CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_SUCCESS,
		categoriesArray
	);

const fetchCategoriesfailed = (error) =>
	createAction(CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
	dispatch(fetchCategoriesStart);
	try {
		const categoriesArray = await getCategoriesAndDocument();
		dispatch(fetchCategoriesSuccess(categoriesArray));
	} catch (error) {
		dispatch(fetchCategoriesfailed(error));
	}
};
