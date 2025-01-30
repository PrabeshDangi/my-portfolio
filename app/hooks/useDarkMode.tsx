import { useEffect, useState } from "react";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

interface UseDarkModeReturn {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

export function useDarkMode(): UseDarkModeReturn {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check localStorage first
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved !== null) {
        return saved === "dark";
      }
      // If no localStorage value, check system preference
      return window.matchMedia(COLOR_SCHEME_QUERY).matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Listen for system dark mode changes
  useEffect(() => {
    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return {
    isDarkMode,
    toggle: () => setIsDarkMode((prev) => !prev),
    enable: () => setIsDarkMode(true),
    disable: () => setIsDarkMode(false),
  };
}
