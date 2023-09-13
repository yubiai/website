import React from "react";
import { Flex, Image, Text, Spacer } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

const SwiperComparison = ({ t, bgColor, bgColorFt1, bgColorFt2 }) => {

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
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", justifyContent: "center" }}>

          <Spacer
          >
            <Flex
              background={bgColor}
              h={"50px"}
              borderRadius={"20px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                display={"flex"}
                w={{ base: "93px", md: "110px" }}
                h={{ base: "40px", md: "46.25px" }}
                alt={"Logo"}
                src={"/static/images/logoyubiai.png"}
                fallbackSrc={"/static/images/logoyubiai.png"}

              />
            </Flex>
            <Flex
              //border={{base: "1px dotted green", sm: "1px dotted blue", md: "1px dotted red"}}
              mt={{ base: "0.78em", sm: "0.78em", md: "0.78em" }}
              direction={"column"}>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>0% *</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt2}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"} >0%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>{t("Crypto/Instant")}</Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt2}
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
                backgroundColor={bgColorFt1}
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
                backgroundColor={bgColorFt2}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                {t("Yes")}
              </Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
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
                backgroundColor={bgColorFt2}
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
            </Flex>
          </Spacer>
        </SwiperSlide>
        {/*freelancer*/}
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "auto", justifyContent: "center" }}>

          <Spacer
          >
            <Flex
              background={bgColor}
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
            <Flex
              //border={{ base: "1px dotted green", sm: "1px dotted blue", md: "1px dotted red" }}
              mt={{ base: "0.78em", sm: "0.78em", md: "0.78em" }}
              direction={"column"}>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>3%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt2}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"} >10%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}
                flexWrap={"wrap"}
                fontSize={{ base: "13px", sm: "13px", md: "15px" }}

              >{t("Min Payout $100")} <br /><span className="swiper-comparison" >{t("275% Fee per Withdrawal")}</span></Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt2}
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
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
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
                backgroundColor={bgColorFt2}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                {t("No/Partial")}
              </Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
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
                backgroundColor={bgColorFt2}
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
            </Flex>
          </Spacer>
        </SwiperSlide>
        {/*upwork*/}
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "auto", justifyContent: "center" }}>

          <Spacer
          >
            <Flex

              background={bgColor}
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
            <Flex
              mt={{ base: "0.78em", sm: "0.78em", md: "0.78em" }} direction={"column"}>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>3.5%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt2}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"} >20%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}
                flexWrap={"wrap"}
                fontSize={{ base: "12px", sm: "12px", md: "15px" }}

              >{t("Min Payout $100")}<br /> <span className="swiper-comparison" >{t("5% Fee per Withdrawal")}</span></Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt2}
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
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
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
                backgroundColor={bgColorFt2}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                {t("No/Partial")}
              </Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
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
                backgroundColor={bgColorFt2}
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
            </Flex>
          </Spacer>
        </SwiperSlide>
        {/*Fiverr*/}
        <SwiperSlide
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "auto", justifyContent: "center" }}>

          <Spacer
          >
            <Flex

              background={bgColor}
              h={"50px"}
              borderRadius={"20px"}
              justifyContent={"center"}
            >
              <Image
                display={"flex"}
                //justifyContent={"center"}
                w={"92px"}
                h={"46.25px"}
                marginBottom={"1rem"}
                alt={"fiverrlogo"}
                src={"/static/images/fiverrIcon.png"}
                fallbackSrc={"/static/images/fiverrIcon.png"}

              />
            </Flex>
            <Flex
              mt={{ base: "0.78em", sm: "0.78em", md: "0.78em" }} direction={"column"}>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>20%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt2}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"} >20%</Text>
              <Text
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}
                flexWrap={"wrap"}
                fontSize={{ base: "13px", sm: "13px", md: "15px" }}

              >{t("Min Payout $100")} <br /><span className="swiper-comparison"
              //style={{ fontSize: "15px" }}
              >{t("275% Fee per Withdrawal")}</span></Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt2}
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
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
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
                backgroundColor={bgColorFt2}
                borderRadius={"0 20px 20px 0"}
                alignItems={"center"}
                justifyContent={"center"}
                color={"black"}>
                {t("No/Partial")}
              </Text>
              <Flex
                display={"flex"}
                h={"50px"}
                backgroundColor={bgColorFt1}
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
                backgroundColor={bgColorFt2}
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
            </Flex>
          </Spacer>
        </SwiperSlide>
      </Flex>
    </Swiper >
  );
}
export default SwiperComparison;