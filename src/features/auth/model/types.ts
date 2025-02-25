export interface AuthState {
    auth: {
        email: string | null;
        isAuthenticated: boolean;
    }
}