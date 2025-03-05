import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bikeReducer from '../../features/bikes/model/bikeSlice';
import cartReducer from '../../features/cart/model/cartSlice';
import themeReducer from '../../entities/theme-toggle/model/themeSlice';

const persistConfig = {
    key: 'root',
    storage,
    //whitelist: ['theme', 'cart'], При добавлении это строки persist не рабоатет. Почему так?
};

const rootReducer = combineReducers({
    bikes: bikeReducer,
    cart: persistReducer(persistConfig, cartReducer),
    theme: persistReducer(persistConfig, themeReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
