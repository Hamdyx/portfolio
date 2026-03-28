'use client';

import { useContext } from 'react';

import { ThemeContext } from '@/providers/ThemeContext';

export function useTheme() {
  return useContext(ThemeContext);
}
