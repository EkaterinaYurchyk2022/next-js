import '@/styles/globals.scss'
import Layout from "@/components/Layout";
import Image from "next/image";
import nextImage from '../public/next.svg'
import Head from "next/head";



const App = ({Component, pageProps}) => (
    <Layout>
        <Head >
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <main>
            <Component {...pageProps} />
        </main>
        <Image
            src={nextImage}
            blurDataURL={'../public/next.svg'}
            width={500}
            height={350}
            alt='preview'
            placeholder='blur'
/>
    </Layout>

)

export default App



