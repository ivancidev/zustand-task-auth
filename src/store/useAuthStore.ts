import { create } from "zustand";
import { AuthState } from "../interfaces/auth";

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    login: (user) => set({ user, isAuthenticated: true }),
    logout: () => set({ user: null, isAuthenticated: false }),
    register: (user) => set({user, isAuthenticated: true})
}));