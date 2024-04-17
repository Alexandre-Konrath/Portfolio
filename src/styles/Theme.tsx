import React, { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`

export const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    white100: '#E6E6E6',
    white200: '#D9D9D9',
    white300: '#CCCCCC',
    white400: '#BFBFBF',

    grey: '#A6A6A6',
    grey100: '#999999',
    grey200: '#8C8C8C',
    grey300: '#808080',

    black: '#000000',
    black100: '#0D0D0D',
    black150: '#121212',
    black200: '#1A1A1A',
    black300: '#262626',
    blackTitle: '#1a1a1a7d',

    boxShadow: '#0a0a0ae8',

    purple: '#520099',
    purple100: '#5800A6',
    purple200: '#5F00B3',
    purple300: '#6600BF',
    purple400: '#6D00CC',

    purple_secondary: '#9486B3',
    purple_tertiary: '#af9cd6',

    html: '#E34C26 ',
    css: '#264de4 ',
    javascript: '#f0db4f ',
    react: '#61dafb ',
    typescript: '#3178c6 ',
    bootstrap: '#007BFF',
  },

  fontFamily: {
    heading: ['IBM Plex Sans', 'sans-serif'].join(','),
    sans: ['Open Sans', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    mono: ['IBM Plex Mono', 'serif'].join(','),
  },

  fontSize: {
    xs: rem(10),
    sm: rem(12),
    md: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(20),
    '2xl': rem(24),
    '3xl': rem(32),
    '4xl': rem(40),
    '5xl': rem(64),
  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
