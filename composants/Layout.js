import Head from "next/head"

const Layout = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>

            <title>Nolan L. - Portfolio</title>
            <meta name="keywords" content="Nolan, LEBOUCHER, Nolan LEBOUCHER,Développeur Fullstack, Edofo, Portfolio Edofo, Avis Edofo, Contact Edofo" />
            <meta name="author" content="Nolan L" />
            <meta name="copyright" content="© Copyright Nolan L. 2022 - Tous droits réservés."/>
            <meta name="description" content="Développeur Fullstack - Nolan L."/>

            <meta name="theme-color" content="#000000" />

            <meta property="og:image" content="%PUBLIC_URL%/images/edofo.png"/>
            <meta property="og:title" content="Développeur Fullstack - Nolan L."/>
            <meta property="og:type" content="Fullstacksite"/>
            <meta property="og:description" content="Développeur Fullstack - Nolan L." />
            <meta property="og:image" content="%PUBLIC_URL%/images/edofo.png" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="400" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@Ed0fo" />
            <meta name="twitter:site:id" content="3064025920" />
            <meta name="twitter:creator" content="@Ed0fo"/>
            <meta name="twitter:creator:id" content="3064025920" />
            <meta name="twitter:title" content="Développeur Fullstack - Nolan L." />
            <meta name="twitter:description" content="Développeur Fullstack - Nolan L." />
            <meta name="twitter:image" content="%PUBLIC_URL%/images/edofo.png" />
            
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default Layout