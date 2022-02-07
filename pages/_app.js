import Layout from '../composants/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
