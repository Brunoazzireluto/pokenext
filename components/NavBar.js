import Link from "next/link";
import Image from "next/image";
import Logo from '../public/images/pokeball.png';

const NavBar = () => {
    return (
        <nav aria-label="Navbar" className="bg-zinc-800">
        <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-4 lg:px-2">
            <div className="flex items-center justify-between">
                <div className="flex justify-center items-center  text-white  sm:justify-start">
                    <Image src={Logo} alt='PokeNext' width={45} height={45}></Image>  
                    <h1 className="ml-2 font-bold text-xl font-fira">PokeNext</h1>
                </div>

                <ul className="flex justify-around items-center w-40 font-fira text-white sm:m-4">
                    <li><Link href='/'>Home</Link></li>  
                    <li><Link href='/about'>About</Link></li>         
                </ul>
            </div>
        </div>
        </nav>

    )
}

export default NavBar;