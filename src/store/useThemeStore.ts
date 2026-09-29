import { create } from 'zustand';

type ThemeMode = 'dark' | 'light';

interface ThemeState {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>((set) => {
  // Read initial preference
  const savedTheme = (typeof window !== 'undefined' && localStorage.getItem('nova-theme')) as ThemeMode | null;
  const initialTheme: ThemeMode = savedTheme || 'dark';

  if (typeof document !== 'undefined') {
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  return {
    theme: initialTheme,
    toggleTheme: () => {
      set((state) => {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        if (typeof document !== 'undefined') {
          if (nextTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          localStorage.setItem('nova-theme', nextTheme);
        }
        return { theme: nextTheme };
      });
    },
    setTheme: (nextTheme) => {
      if (typeof document !== 'undefined') {
        if (nextTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('nova-theme', nextTheme);
      }
      set({ theme: nextTheme });
    },
  };
});
