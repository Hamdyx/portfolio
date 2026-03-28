'use client';

import type { ReactNode } from 'react';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { useEffect, useSyncExternalStore } from 'react';

import { darkTheme, lightTheme } from '@/config/theme';
import { ThemeContext } from '@/providers/ThemeContext';

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);

  const mql = globalThis.matchMedia?.('(prefers-color-scheme: dark)');
  const handleSystemChange = () => {
    if (!localStorage.getItem('theme-preference')) {
      emitChange();
    }
  };
  mql?.addEventListener('change', handleSystemChange);

  return () => {
    listeners.delete(callback);
    mql?.removeEventListener('change', handleSystemChange);
  };
}

function getSnapshot(): boolean {
  const stored = localStorage.getItem('theme-preference');
  if (stored) return stored === 'dark';
  return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
}

function getServerSnapshot(): boolean {
  return false;
}

function toggleTheme() {
  const isDark = getSnapshot();
  const next = !isDark;
  localStorage.setItem('theme-preference', next ? 'dark' : 'light');
  emitChange();
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <ThemeContext value={{ isDark, toggle: toggleTheme }}>
      <AntdRegistry>
        <ConfigProvider theme={isDark ? darkTheme : lightTheme}>{children}</ConfigProvider>
      </AntdRegistry>
    </ThemeContext>
  );
}
