import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string

    colors: {
      white: string
      white100: string
      white200: string
      white300: string
      white400: string

      grey: string
      grey100: string
      grey200: string
      grey300: string

      black: string
      black100: string
      black150: string
      black200: string
      black300: string
      blackTitle: string

      boxShadow: string

      purple: string
      purple100: string
      purple200: string
      purple300: string
      purple400: string

      purple_secondary: string
      purple_tertiary: string

      html: string
      css: string
      javascript: string
      react: string
      typescript: string
      bootstrap: string

    }
    fontFamily: {
      heading: string
      sans: string
      mono: string
    }
    fontSize: {
      xs: string
      sm: string
      md: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
    }
  }
}
