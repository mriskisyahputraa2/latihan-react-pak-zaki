import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

function Search() {
    return <>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
                <div>
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p className="py-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam animi pariatur placeat, facilis dolores suscipit? Omnis corrupti molestias id delectus atque. Perspiciatis aliquam ipsam odio aut quia similique, labore maiores? Veritatis, vero odio odit explicabo placeat earum aspernatur illum quos corporis deserunt eveniet ex consectetur distinctio pariatur aliquid ipsam voluptatibus aut in officiis assumenda! Omnis, magnam qui non accusantium illum assumenda dolorem laborum sit! Magni, inventore quae facere, provident excepturi labore hic voluptatem dicta soluta asperiores dignissimos quibusdam aliquam sunt!</p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button><RiCustomerService2Fill size={50} /></button>
                        <div>
                            <h3 className='py-2'>LEADING SERVICES</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button><MdOutlineTravelExplore size={50} /></button>
                        <div>
                            <h3 className='py-2'>LEADING SERVICES</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calender ChekOut */}
            <div>
                <div className='border text-center'>
                    <p>GET AN ADDITIONAL 10% OFF</p>
                    <p className='my-2'>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 p-2'>BOOK NOW AND SAVE</p>
                </div>

                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destinations</label>
                        <select className='border rounded-md p-2'>
                            <option>Grande Antigua</option>
                            <option>Key West</option>
                            <option>Maldives</option>
                            <option>Cozumel</option>
                        </select>
                    </div>

                    <div className='flex flex-col my-4'>
                        <label>Chek-In</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>

                    <div className='flex flex-col my-2'>
                        <label>Chek-Out</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                    <button className='w-full my-4'>Rates & Availabilitie</button>
                </form>
            </div>
        </div>
    </>
}

export default Search