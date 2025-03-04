import { configureStore } from '@reduxjs/toolkit';
import bikeReducer from '../../features/bikes/model/bikeSlice';
import cartReducer from '../../features/cart/model/cartSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from '../../shared/model/themeSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    bikes: bikeReducer,
    cart: persistReducer(persistConfig, cartReducer),
    theme: themeReducer,
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
