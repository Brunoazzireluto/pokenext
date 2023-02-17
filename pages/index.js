import { Inter } from '@next/font/google'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='flex justify-center items-center  h-10 text-center'>
        <h1 className='bold text-green-600 text-lg'>Hello</h1>
      </div>
    </>
  )
}

//parei na aula 21