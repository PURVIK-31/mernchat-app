import { create } from "zustand";
export const useAuthstore = create((set) => ({
  authUser: null,
  isSigningup: false,
  isLoginnging: false,
  isUpdatingprofile: false,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
    } catch (error) {}
  },
}));
