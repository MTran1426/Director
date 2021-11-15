import '../styles/globalStyles'
import GlobalStyles from '../styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyles />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
