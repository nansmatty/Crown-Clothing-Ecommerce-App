// import logger from 'redux-logger';
import {
	compose,
	legacy_createStore as createStore,
	applyMiddleware,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const loggerMiddlware = (store) => (next) => (action) => {
	if (!action.type) {
		return next(action);
	}

	console.log('type', action.type);
	console.log('payload', action.payload);
	console.log('currentState', store.getState());

	next(action);

	console.log('next state: ', store.getState());
};

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [loggerMiddlware];

const composeEnhancer = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancer);

export const persistor = persistStore(store);
