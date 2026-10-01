import { create } from 'zustand';

export type ThemeMode = 'light' | 'dark';

interface ThemeState {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

export const applyThemeToDOM = (theme: ThemeMode) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const body = document.body;

  if (theme === 'dark') {
    root.classList.add('dark');
    if (body) body.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
    if (body) body.setAttribute('data-theme', 'dark');
  } else {
    root.classList.remove('dark');
    if (body) body.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
    if (body) body.setAttribute('data-theme', 'light');
  }

  try {
    localStorage.setItem('nova-theme', theme);
  } catch (e) {
    // localStorage not accessible
  }

  // Dispatch custom event for external listeners
  try {
    window.dispatchEvent(new CustomEvent('nova-theme-changed', { detail: { theme } }));
  } catch (e) {}
};

export const useThemeStore = create<ThemeState>((set) => {
  let initialTheme: ThemeMode = 'light';
  if (typeof window !== 'undefined') {
    try {
      const urlTheme = new URLSearchParams(window.location.search).get('theme');
      if (urlTheme === 'dark' || urlTheme === 'light') {
        initialTheme = urlTheme;
        localStorage.setItem('nova-theme', urlTheme);
      } else {
        const saved = localStorage.getItem('nova-theme');
        if (saved === 'dark' || saved === 'light') {
          initialTheme = saved;
        }
      }
    } catch (e) {}
  }

  // Synchronize DOM immediately on evaluation
  applyThemeToDOM(initialTheme);

  // Expose global helpers for debugging and instant console control
  if (typeof window !== 'undefined') {
    (window as any).__setTheme = (theme: ThemeMode) => {
      applyThemeToDOM(theme);
      set({ theme });
    };
    (window as any).__toggleTheme = () => {
      set((state) => {
        const next: ThemeMode = state.theme === 'dark' ? 'light' : 'dark';
        applyThemeToDOM(next);
        return { theme: next };
      });
    };
  }

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
