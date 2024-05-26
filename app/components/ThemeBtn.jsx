"use client";

import { useTheme } from "@/contexts/ThemeContext";
// import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function ThemeBtn() {
  const { dispatch, state } = useTheme();

  function toggleTheme() {
    dispatch({ type: "TOGGLE_THEME" });
  }

  console.log("Themebtn: state", state);
  // return (
  //   <DarkModeSwitch
  //     className="text-accent"
  //     checked={state.userPreferences.theme === "dark"}
  //     onChange={toggleTheme}
  //   />
  // );

  return (
    <button
      className="flex items-center justify-between w-12 h-6 p-1 bg-gray-200 dark:bg-accent rounded-full cursor-pointer"
      onClick={toggleTheme}
      checked={state.userPreferences.theme === "dark"}
      aria-label="Activate Dark Theme"
    >
      <div
        className={`w-4 h-4 bg-white dark:bg-gray-100 rounded-full transform duration-300 ease-in-out ${
          state.userPreferences.theme === "dark"
            ? "translate-x-6"
            : "translate-x-0"
        }`}
      ></div>
    </button>
  );
}
