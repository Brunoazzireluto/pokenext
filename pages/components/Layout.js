import Footer from "./Footer";
import NavBar from "./NavBar";
import Favicon from '@/public/images/favicon.ico'
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <>
            <Head>
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