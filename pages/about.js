import Image from "next/image";
import Charizard from '@/public/images/charizard.png'

const About = () => {
    return (
        <div className="h-full w-5/6 mx-auto flex flex-col justify-around 
        items-center p-4 m-4 font-fira shadow-lg bg-gray-200 rounded">
            <h1 className="font-bold text-2xl  text-red-600 mb-4">Sobre o Projeto</h1>
            <p className="text-center text-lg mb-8">
                Dolor incididunt exercitation reprehenderit sit nisi id proident sunt consequat velit ex velit Lorem ipsum.
                Aliqua nisi ad esse qui ut mollit tempor excepteur eu proident.
                Dolor deserunt laborum esse proident sunt ex mollit aute occaecat aliqua.
                Dolor consequat ullamco cupidatat non dolor ut ullamco exercitation.
                Sunt duis id consectetur officia reprehenderit dolor officia.</p>
            <Image src={Charizard} width={300} height={300}  alt='pokemon charizard'/>
        </div>
    )
}

export default About;