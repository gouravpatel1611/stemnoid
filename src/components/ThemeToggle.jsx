import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} title={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
    {isDark ? <Sun size={17} /> : <Moon size={17} />}
  </button>;
}