import React from 'react'

import Slider from "react-slick";
import Contianer from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import SlideOne from "../../assets/slide1.png"
import SlideTwo from "../../assets/slide2.png"
import SlideThree from "../../assets/slide3.png"
import SlideFour from "../../assets/slide4.png"
import "slick-carousel/slick/slick.css";

function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,

    };
    return (
        <section>
            <Contianer>
                <Flex className="justify-between">
                    <div className='w-[70%] '>
                        <Slider {...settings}>
                            <div>
                            <Image src={SlideOne} className="w-full"/>
                            </div>
                            <div>
                            <Image src={SlideTwo} className="w-full"/>
                            </div>
                            <div>
                            <Image src={SlideThree} className="w-full"/>
                            </div>
                            <div>
                            <Image src={SlideFour} className="w-full"/>
                            </div>
                        </Slider>
                     
                    </div>

                    <div className='w-[28%] h-32 bg-red-500'>

                    </div>
                </Flex>
            </Contianer>

        </section>
    )
}

export default Banner