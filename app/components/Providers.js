"use client";

import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";

export default function Providers({ children }) {
  const { state } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove("dark", "pink");
    if (state.userPreferences.theme) {
      document.documentElement.classList.add(state.userPreferences.theme);
    }
  }, [state.userPreferences.theme]);

  return <ThemeProvider>{children}</ThemeProvider>;
}
