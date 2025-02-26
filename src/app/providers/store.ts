import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../features/auth/model/authSlice';
import bikeReducer from '../../features/bikes/model/bikeSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bikes: bikeReducer,
    },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const useAppSelector = useSelector.withTypes<AppState>();
// export const useAppDispatch = useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
