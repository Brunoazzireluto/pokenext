import Link from "next/link";
import Image from "next/image";
import Logo from '@/public/images/pokeball.png';

const NavBar = () => {
    return (
        <nav aria-label="Navbar" class="bg-gray-700">
        <div class="mx-auto max-w-screen-xl px-2 py-4 sm:px-4 lg:px-2">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex justify-center items-center  text-red-600  sm:justify-start">
                    <Image src={Logo} alt='PokeNext' width={45} height={45}></Image>  
                    <h1 className="ml-2 font-bold text-xl">PokeNext</h1>
                </div>

                <ul className="flex justify-around items-center w-40">
                    <li><Link href='/'>Home</Link></li>  
                    <li><Link href='/'>About</Link></li>         
                </ul>
            </div>
        </div>
        </nav>

    )
}

export default NavBar;