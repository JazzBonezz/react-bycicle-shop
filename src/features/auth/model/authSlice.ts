import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
    auth: {
        email: null,
        isAuthenticated: false,
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action: PayloadAction<{ email: string; password: string }>) => {
            const { email, password } = action.payload;
            state.auth.email = email;
            state.auth.isAuthenticated = false;

            const userData = { email, password };
            localStorage.setItem("userData", JSON.stringify(userData));
        },
        login: (state, action: PayloadAction<{ email: string; password: string }>) => {
            const { email, password } = action.payload;
            const storedUser = localStorage.getItem("userData");

            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);

                if (parsedUser.email === email && parsedUser.password === password) {
                    state.auth.email = email;
                    state.auth.isAuthenticated = true;
                    localStorage.setItem("email", email);
                }
            }
        },
        logout: (state) => {
            state.auth.email = null;
            state.auth.isAuthenticated = false;
            localStorage.removeItem('email');
        },
    },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
