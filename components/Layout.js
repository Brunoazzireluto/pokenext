import Footer from "./Footer";
import NavBar from "./NavBar";
import Favicon from '@/public/images/favicon.ico'
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,300;0,400;0,500;1,400;1,700&display=swap"
                            rel="stylesheet" />
                <link rel="shortcut icon" href={Favicon} />
                <title>PokeNext</title>
            </Head>
            <NavBar></NavBar>
            <main>{ children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout;