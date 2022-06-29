import type { AppProps } from 'next/app'
// import { DefaultTheme, ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/global'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
