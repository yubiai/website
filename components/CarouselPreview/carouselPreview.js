import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';




const Carousel = () => {

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[ Autoplay ]}
        >
            <Flex
                className={"slider-carousel"}
                direction={"row"}
            >
                <SwiperSlide>
                    <Flex className={"slide-track-carousel"}>
                        <Image className="slide-carousel"
                            w={{ base: "289px", sm: "75%", lg: "282px" }}
                            h={{ base: "400px", sm: "75%", lg: "400px" }}
                            src={"/static/images/C1.png"} alt={"C1"} />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex className={"slide-track-carousel"}>
                        <Image className="slide-carousel"
                            w={{ base: "289px", sm: "75%", lg: "282px" }}
                            h={{ base: "400px", sm: "75%", lg: "400px" }}
                            src={"/static/images/C2.png"}
                            alt={"C2"}
                        />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex className={"slide-track-carousel"}>
                        <Image className="slide-carousel"
                            w={{ base: "289px", sm: "75%", lg: "282px" }}
                            h={{ base: "400px", sm: "75%", lg: "400px" }}
                            src={"/static/images/C3.png"}
                            alt={"C3"}
                        />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex className={"slide-track-carousel"}>
                        <Image className="slide-carousel"
                            w={{ base: "289px", sm: "75%", lg: "282px" }}
                            h={{ base: "400px", sm: "75%", lg: "400px" }}
                            src={"/static/images/C4.png"}
                            alt={"C4"}
                        />
                    </Flex>
                </SwiperSlide>
            </Flex >
        </Swiper>
    );
}

export default Carousel;