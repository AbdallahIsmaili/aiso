import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("aiso-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("aiso-theme", theme);
    set({ theme });
  },
}));
