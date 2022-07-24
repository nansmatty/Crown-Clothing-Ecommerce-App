import { AnyAction } from 'redux';
import { USER_ACTIONS_TYPES } from './user.types';

export type UserState = {
	readonly currentUser: {} | null;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTIONS_TYPES.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload,
			};
		case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
			};
		case USER_ACTIONS_TYPES.SIGN_IN_FAILED:
		case USER_ACTIONS_TYPES.SIGN_UP_FAILED:
		case USER_ACTIONS_TYPES.SIGN_OUT_FAILED:
			return { ...state, error: payload };
		default:
			return state;
	}
};