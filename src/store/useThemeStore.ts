import { create } from 'zustand';

type ThemeMode = 'light' | 'dark';

interface ThemeState {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const applyThemeToDOM = (theme: ThemeMode) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const body = document.body;
  if (theme === 'dark') {
    root.classList.add('dark');
    if (body) body.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
  } else {
    root.classList.remove('dark');
    if (body) body.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
  }
  try {
    localStorage.setItem('nova-theme', theme);
  } catch (e) {
    // localStorage not accessible
  }
};

export const useThemeStore = create<ThemeState>((set) => {
  // Always default to 'light' unless explicitly saved as 'dark'
  let initialTheme: ThemeMode = 'light';
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem('nova-theme');
      if (saved === 'dark') {
        initialTheme = 'dark';
      }
    } catch (e) {}
  }

  // Synchronize DOM on startup
  applyThemeToDOM(initialTheme);

  return {
    theme: initialTheme,
    toggleTheme: () => {
      set((state) => {
        const nextTheme: ThemeMode = state.theme === 'dark' ? 'light' : 'dark';
        applyThemeToDOM(nextTheme);
        return { theme: nextTheme };
      });
    },
    setTheme: (nextTheme: ThemeMode) => {
      applyThemeToDOM(nextTheme);
      set({ theme: nextTheme });
    },
  };
});
