import { createSlice } from '@reduxjs/toolkit';

// Check if dark mode is stored in localStorage or use system preference as fallback
const getInitialThemeState = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('gaming-store-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Use system preference as fallback
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false; // Default to light mode if running on server
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkMode: getInitialThemeState(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('gaming-store-theme', state.isDarkMode ? 'dark' : 'light');
      }
      // Apply theme to document
      if (state.isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload === 'dark';
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('gaming-store-theme', action.payload);
      }
      // Apply theme to document
      if (state.isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;