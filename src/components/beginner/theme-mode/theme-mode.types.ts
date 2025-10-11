export type THEME = "light" | "dark";

export type ThemeContextType = {
  theme: THEME;
  toggleTheme: () => void;
};
