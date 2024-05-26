"use client";
import { useEffect } from "react";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import "./globals.css";
import "./logo.css";

function MyApp({ children }) {
  const { state } = useTheme();

  useEffect(() => {
    console.log("Theme changed:", state.userPreferences.theme);
    // dark theme läggs på om toggle byts till add
    document.documentElement.classList.toggle(
      "dark",
      state.userPreferences.theme === "dark"
    );
    document.documentElement.classList.toggle(
      "pink",
      state.userPreferences.theme === "pink"
    );
  }, [state.userPreferences.theme]);

  return (
    <div
      className={`min-h-screen bg-gradient-to-t from-background1 via-background2 to-background3  text-text${
        state.userPreferences.theme === "dark" ? "dark" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default ({ children }) => (
  <ThemeProvider>
    <MyApp>{children}</MyApp>
  </ThemeProvider>
);
