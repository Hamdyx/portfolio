import { createContext } from 'react';

export type ThemeContextType = {
  isDark: boolean;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggle: () => {},
});
