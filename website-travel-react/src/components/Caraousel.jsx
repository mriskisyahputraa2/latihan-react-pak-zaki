import { useState } from "react"
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"


function Caraousel() {
    const slideImg = [
        {
            url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1610964029130-fed216b99544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1580110552993-9712f4198254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        }
    ]

    const [Slide, setSlide] = useState(0);
    const lenght = slideImg.length;

    const rightSlide = () => {
        setSlide(Slide === 0 ? lenght - 1 : Slide - 1)
    }


    const leftSlide = () => {
        setSlide(Slide === lenght - 1 ? 0 : Slide + 1)
    }



    return <>
        <div className="max-w-[1240px] mx-auto py-16 px-4 ">
            <div className="pb-10 py-6">
                <h2 className="text-center">Please take a look at our beach trip slides</h2>
            </div>
            <div className="relative  flex justify-center">
                <BsArrowRightSquareFill onClick={rightSlide} className="absolute top-[50%] text-3xl right-8" />
                <BsArrowLeftSquareFill onClick={leftSlide} className="absolute top-[50%] text-3xl left-8" />
                {slideImg.map((item, index) => {
                    return <>

                        <div className={Slide === index ? 'opacity-100' : 'opacity-0'}>
                            {Slide === index && (<img className="rounded object-cover w-full " src={item.url} alt="/" />)}
                        </div>
                    </>
                })}
            </div>

        </div>
    </>
}

export default Caraousel