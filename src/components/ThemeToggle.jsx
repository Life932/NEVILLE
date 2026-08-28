"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center p-2 opacity-50" />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-10 h-10 rounded-full border border-border bg-background text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center p-2 transition-all duration-300 shadow-sm cursor-pointer"
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Moon className="w-5 h-5 text-accent transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Sun className="w-5 h-5 text-amber-500 transition-transform duration-300 rotate-0 scale-100" />
      )}
    </button>
  );
}
