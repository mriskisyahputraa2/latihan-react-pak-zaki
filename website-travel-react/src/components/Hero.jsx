import PantaiVid from '../assets/pantai.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

function Hero() {
    return <>
        <div className='w-full h-screen'>
            <video className='w-full h-full object-cover' src={PantaiVid} ></video>
        </div>
        <div className='absolute top-0 left-0 w-full h-full bg-gray-900/30'></div>

        <div className='w-full h-full absolute top-0 flex flex-col justify-center text-center p-1 text-white'>
            <h1>First Class Travel</h1>
            <h2 className='py-4'>Top 1% Locations Worldwide</h2>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-sm bg-gray-100/90 text-black'>
                <div>
                    <input type="text" className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none' placeholder='Search Destinations' />
                </div>
                <div>
                    <button><AiOutlineSearch size={20} /></button>
                </div>
            </form>

        </div>
    </>
}

export default Hero