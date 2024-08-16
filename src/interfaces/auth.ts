import { User } from "firebase/auth";

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
    register: (user: User) => void;
}