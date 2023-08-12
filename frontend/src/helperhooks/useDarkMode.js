//frontedn/src/helperhooks/useDarkMode.js

import { useLocalStorage, useMediaQuery, useUpdateEffect } from "usehooks-ts";

// Query to check if the operating system prefers dark mode
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

// Custom hook for managing dark mode
export function useDarkMode(defaultValue) {
  // Check if the operating system prefers dark mode
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  // Local storage hook to store the user's dark mode preference
  const [isDarkMode, setDarkMode] = useLocalStorage(
    "usehooks-ts-dark-mode",
    defaultValue ?? isDarkOS ?? false
  );

  // Update darkMode if the OS preference changes
  useUpdateEffect(() => {
    setDarkMode(isDarkOS);
  }, [isDarkOS]);

  // Return the current state of dark mode and functions to toggle, enable, or disable it
  return {
    isDarkMode,
    toggle: () => setDarkMode((prev) => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
  };
}

export default useDarkMode;
