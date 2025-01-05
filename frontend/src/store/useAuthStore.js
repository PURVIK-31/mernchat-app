import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
export const useAuthstore = create((set) => ({
  authUser: null,
  isSigningup: false,
  isLoginnging: false,
  isUpdatingprofile: false,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const res = axiosInstance.get("/auth/checkAuth");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth: ", error.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
