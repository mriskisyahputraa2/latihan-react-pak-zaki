import { FiSearch } from 'react-icons/fi'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaInstagram, FaGithub, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'


function Navbar() {
    const [Nav, setNav] = useState(false)
    const [Logo, setLogo] = useState(false);

    const handleNav = () => {
        setNav(!Nav);
        setLogo(!Logo);
    }

    return <>
        <div className="flex justify-between items-center h-20 px-4 absolute top-0 z-10 w-full text-white ">
            {/* Desktop Menu */}
            <div>
                <h1 onClick={handleNav} className={Logo ? 'hidden' : 'block'}>INDONESIA.</h1>
            </div>
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex'>
                <BsPerson className='mr-2' size={20} />
                <FiSearch size={20} />
            </div>

            {/* Hamburger Menu */}
            <div onClick={handleNav} className='md:hidden z-10'>
                {Nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>

            {/* Mobile Menu Dropdown */}
            <div onClick={handleNav} className={Nav ? 'text-black flex flex-col absolute top-[0] left-0 w-full bg-gray-100/90 px-4 py-7' : 'absolute left-[-100%]'} >
                <ul>
                    <h1>INDONESIA.</h1>
                    <li className='border-b'>Home</li>
                    <li className='border-b'>Destinations</li>
                    <li className='border-b'>Travel</li>
                    <li className='border-b'>View</li>
                    <li className='border-b'>Book</li>
                </ul>
                <div className='flex flex-col'>
                    <button className='my-6'>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaGithub className='icon' />
                    <FaInstagram className='icon' />
                    <FaLinkedinIn className='icon' />
                    <FaYoutube className='icon' />
                    <FaWhatsapp className='icon' />
                </div>
            </div>
        </div>
    </>
}
export default Navbar