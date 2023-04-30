import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import KeyWest from '../assets/keywest.jpg'
import SelectCard from "./SelectsCard"

function Select() {
    return <>


        <div className="max-w-[1240px] px-4 mx-auto ">
            <div className='text-center pb-16'>
                <h2>Recommended Tourist Destinations</h2>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <SelectCard bg={BoraBora} text='Bora Bora' />
                <SelectCard bg={BoraBora2} text='Maldives' />
                <SelectCard bg={Maldives} text='Antigua' />
                <SelectCard bg={Maldives2} text='Cozumel' />
                <SelectCard bg={Maldives3} text='Jamaica' />
                <SelectCard bg={KeyWest} text='Key West' />
            </div>
        </div>
    </>
}

export default Select