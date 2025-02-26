import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const storedData = localStorage.getItem('userData');
const parsedData = storedData ? JSON.parse(storedData) : null;

const initialState: AuthState = {
    auth: {
        email: parsedData?.email || null,
        isAuthenticated: parsedData?.isAuthenticated || false,
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (
            state,
            action: PayloadAction<{ email: string; password: string }>,
        ) => {
            const { email, password } = action.payload;
            state.auth.email = email;
            state.auth.isAuthenticated = false;

            const userData = { email, password, isAuthenticated: false };
            localStorage.setItem('userData', JSON.stringify(userData));
        },
        login: (
            state,
            action: PayloadAction<{ email: string; password: string }>,
        ) => {
            const { email, password } = action.payload;
            const storedUser = localStorage.getItem('userData');

            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);

                if (
                    parsedUser.email === email &&
                    parsedUser.password === password
                ) {
                    state.auth.email = email;
                    state.auth.isAuthenticated = true;
                    localStorage.setItem('email', email);

                    localStorage.setItem(
                        'userData',
                        JSON.stringify({
                            ...parsedUser,
                            isAuthenticated: true,
                        }),
                    );
                }
            }
        },
        logout: (state) => {
            state.auth.email = null;
            state.auth.isAuthenticated = false;
            localStorage.setItem(
                'userData',
                JSON.stringify({
                    email: null,
                    password: null,
                    isAuthenticated: false,
                }),
            );
        },
    },
});

export const selectIsAuthenticated = (state: { auth: AuthState }) =>
    state.auth.auth.isAuthenticated; // не сам написал

export const userEmail = (state: { auth: AuthState }) => state.auth.auth.email;

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
