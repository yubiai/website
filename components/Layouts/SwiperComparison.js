import React from "react";
import { Box, Flex, Image, Text, Spacer } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const SwiperComparison = () => {
  
  return (
    <Swiper
      spaceBetween={0}
      //width={275}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      /*autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}*/
      modules={[Autoplay]}
    >
      <Flex direction={"column"}>
        {/*Yubiai*/}
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", border: "1px dotted pink", justifyContent: "center" }}>

          <Spacer
          >
            <Flex
              background={"rgba(217, 114, 241, 0.6)"}
              h={"50px"}
              borderRadius={"20px"}
              justifyContent={"center"}
            >
              <Image
                display={"flex"}
                w={"110px"}
                h={"46.25px"}
                marginBottom={"1rem"}
                alt={"Logo"}
                src={"/static/images/logoyubiai.png"}
                fallbackSrc={"/static/images/logoyubiai.png"}

              />
            </Flex>
            <Flex p={"0.81rem 0 0 0 "} direction={"column"}>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>0% *</Text>
              <Text
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"} >0%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>Crypto/Instant</Text>
              <Flex
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CheckIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CheckIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Text
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                Yes
              </Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CheckIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Flex
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CheckIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
            </Flex>
          </Spacer>
        </SwiperSlide>
        {/*freelancer*/}
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "auto", border: "1px dotted pink", justifyContent: "center" }}>

          <Spacer
          >
            <Flex
              background={"rgba(217, 114, 241, 0.6)"}
              h={"50px"}
              borderRadius={"20px"}
              justifyContent={"center"}
            >
              <Image
                display={"flex"}
                //justifyContent={"center"}
                w={"110px"}
                h={"46.25px"}
                marginBottom={"1rem"}
                alt={"freelancerIcon"}
                src={"/static/images/freelancerIcon.png"}
                fallbackSrc={"/static/images/freelancerIcon.png"}

              />
            </Flex>
            <Flex p={"0.81rem 0 0 0 "} direction={"column"}>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>3%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"} >10%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}
                flexWrap={"wrap"}
                fontSize={"15px"}

              >Min Payout $100<br /><span style={{ fontSize: "15px" }}>2.75% Fee per Withdrawal</span></Text>
              <Flex
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                <CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                <CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Text
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                No/Partial
              </Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Flex
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
            </Flex>
          </Spacer>
        </SwiperSlide>
        {/*upwork*/}
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "auto", border: "1px dotted pink", justifyContent: "center" }}>

          <Spacer
          >
            <Flex
              background={"rgba(217, 114, 241, 0.6)"}
              h={"50px"}
              borderRadius={"20px"}
              justifyContent={"center"}
            >
              <Image
                display={"flex"}
                w={"110px"}
                h={"46.25px"}
                marginBottom={"1rem"}
                alt={"upworklogo"}
                src={"/static/images/upworklogo.png"}
                fallbackSrc={"/static/images/upworklogo.png"}

              />
            </Flex>
            <Flex p={"0.81rem 0 0 0 "} direction={"column"}>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>3.5%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"} >20%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}
                flexWrap={"wrap"}
                fontSize={"15px"}

              >Min Payout $100, <br /><span style={{ fontSize: "15px" }}>5% Fee per Withdrawal</span></Text>
              <Flex
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                <CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                <CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Text
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                No/Partial
              </Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Flex
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
            </Flex>
          </Spacer>
        </SwiperSlide>
        {/*Fiverr*/}
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "auto", border: "1px dotted pink", justifyContent: "center" }}>

          <Spacer
          >
            <Flex
              background={"rgba(217, 114, 241, 0.6)"}
              h={"50px"}
              borderRadius={"20px"}
              justifyContent={"center"}
            >
              <Image
                display={"flex"}
                //justifyContent={"center"}
                w={"110px"}
                h={"46.25px"}
                marginBottom={"1rem"}
                alt={"fiverrlogo"}
                src={"/static/images/fiverrIcon.png"}
                fallbackSrc={"/static/images/fiverrIcon.png"}

              />
            </Flex>
            <Flex p={"0.81rem 0 0 0 "} direction={"column"}>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>20%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"} >20%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}
                flexWrap={"wrap"}
                fontSize={"15px"}

              >Min Payout $100<br /><span style={{ fontSize: "15px" }}>2.75% Fee per Withdrawal</span></Text>
              <Flex
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                <CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                <CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Text
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                No/Partial
              </Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={"rgba(0, 22, 100, 0.30)"}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
              <Flex
                display={"flex"}
                h={"50px"}
                //backgroundColor={"rgba(0, 22, 100, 0.30)"}
                //borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}><CloseIcon
                  w={"30px"}
                  h={"30px"}
                  border={"1px solid black"}
                  borderRadius={"14px"}
                  padding={"3px"} />
              </Flex>
            </Flex>
          </Spacer>
        </SwiperSlide>
      </Flex>
    </Swiper>
  );
}
export default SwiperComparison;