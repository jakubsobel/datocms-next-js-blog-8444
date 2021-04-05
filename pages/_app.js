import { AnimateSharedLayout } from 'framer-motion'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  )
}

export default MyApp
