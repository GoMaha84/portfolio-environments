import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      isLoading: false,
      token: null,
      login: async (username: string, password: string) => {
        set({ isLoading: true });
        try {
          // In production, this should be an actual API call
          if (username === import.meta.env.VITE_ADMIN_USERNAME && 
              password === import.meta.env.VITE_ADMIN_PASSWORD) {
            set({ 
              isAuthenticated: true, 
              token: 'dummy-token',
              isLoading: false 
            });
            return true;
          }
          return false;
        } catch (error) {
          console.error('Login error:', error);
          return false;
        } finally {
          set({ isLoading: false });
        }
      },
      logout: () => {
        set({ 
          isAuthenticated: false, 
          token: null 
        });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
); 