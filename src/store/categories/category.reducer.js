import { CATEGORIES_ACTIONS_TYPES } from './category.types';

export const CATEGORIES_INITIAL_STATE = {
	categories: [],
	isLoading: false,
	error: null,
};

export const categoriesReducer = (
	state = CATEGORIES_INITIAL_STATE,
	action = {}
) => {
	const { type, payload } = action;
	switch (type) {
		case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_START:
			return { ...state, isLoading: true };
		case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_SUCCESS:
			return { ...state, categories: payload, isLoading: false };
		case CATEGORIES_ACTIONS_TYPES.FETCH_CATEGORY_FAILED:
			return { ...state, error: payload, isLoading: false };

		default:
			return state;
	}
};
