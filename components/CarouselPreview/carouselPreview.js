import React, { Component } from "react";
import Slider from 'react-slick'; // Assuming you're using the 'react-slick' library
import { Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            prevArrow: null, 
            nextArrow: null 
        };
        return (
            <div>
                <Slider {...settings} >
                    {/* Add your carousel items here */}
                    <div >
                        <Image
                         w={{ base: "289px", sm: "3xl", lg: "279px"}}
                         h={{ base: "420px", sm: "3xl", lg: "410px"}}
                         src={"/static/images/C1.png"} alt={"C1"} />

                    </div>
                    <div>
                        <Image 
                         w={{ base: "289px", sm: "3xl", lg: "279px"}}
                         h={{ base: "420px", sm: "3xl", lg: "410px"}}
                         src={"/static/images/C2.png"}
                         alt={"C2"}
                          />

                    </div>



                </Slider>
            </div>
        );
    }
}