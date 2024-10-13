import { create } from 'zustand';
import axios from 'axios';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    try {
      const response = await axios.post('/api/user/login', { email, password });
      if (response.status === 200) {
        set({ isAuthenticated: true });
        return true;
      }
    } catch (error) {
      set({ isAuthenticated: false });
      console.error('Login failed:', error);
      return false;
    }
  },

  logout: () => {
    set({ isAuthenticated: false });
  },
  auth: (get: any) => {
    return get().isAuthenticated; // Return current authentication status
  },
}));
