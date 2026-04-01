import type { ThemeConfig } from 'antd';

import { theme } from 'antd';

const sharedToken = {
  fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif',
  borderRadius: 8,
};

export const lightTheme: ThemeConfig = {
  token: {
    ...sharedToken,
    colorPrimary: '#4f46e5',
    colorBgBase: '#f9f9ff',
    colorTextBase: '#151c27',
    colorLink: '#4f46e5',
    colorLinkHover: '#3525cd',
  },
};

export const darkTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    ...sharedToken,
    colorPrimary: '#a3a6ff',
    colorBgBase: '#060e20',
    colorTextBase: '#dee5ff',
    colorLink: '#a3a6ff',
    colorLinkHover: '#8387ff',
    colorTextLightSolid: '#060e20',
  },
};
