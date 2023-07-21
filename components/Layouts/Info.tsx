import { Box, Text, Flex } from "@chakra-ui/react";
//import styles from "./info.module.css";



const Info = () => {

  return (
    <Box
      className={"info-container"}
      w="full"
      h="800px"
      style={{ border: "1px dotted black" }}
    >
      <Text
        color="#001664"
        fontSize={"64px"}
        fontWeight="700"
        lineHeight={1}
        textAlign={"center"}
        height={"72px"}
        margin={"10px"}
      >
        Why choose Yubiai?
      </Text>
      <Flex
        width="auto"
        height="564px"
        style={{ border: "1px dotted red", justifyContent: "space-around"}}
        
      >
        <Text
          color={"#001664"}
          width={"1154px"}
          fontSize={"24px"}
          fontWeight={"normal"}
          lineHeight={1.2}
          fontStyle={"normal"}
          style={{wordWrap: "break-word"}}>
          Yubiai is an <span style={{fontWeight: 600 }}>online marketplace</span>where people can buy or sell services using <span style={{ fontWeight: 600 }}>digital money.</span> <br />It is a <span style={{ fontWeight: 600 }}>soon-to-be decentralized</span> community which means it’s <span style={{ fontWeight: 600 }}>not controlled by one company</span> in particular but <span style={{ fontWeight: 600 }}>by the whole community</span> itself.<br /><br />The platform features key components such as the<span style={{ fontWeight: 600 }}> Proof of Humanity</span> sybil-resistance protocol which is used as a <span style={{ fontWeight: 600 }}>badge to authenticate users and ensure user integrity,</span> rather than a mandatory authentication method. It also uses<span style={{ fontWeight: 600 }}> Kleros</span> when a problem with a purchase occures. Kleros, which is one of the <span style={{ fontWeight: 600 }}>most important pillar of our platform</span>, is a <span style={{ fontWeight: 600 }}>decentralized arbitration service</span> for the disputes. Imagine having a group of judges who help solve disagreements; listens to both sides of the story and looks at the evidence or information provided. Then, it makes a decision based on <span style={{ fontWeight: 600 }}>what is fair and right.<br /></span><br />In the future, Yubiai will have a new feature called <span style={{ fontWeight: 600 }}>Curate</span>. This feature will help make sure that <span style={{ fontWeight: 600 }}>only good and trustworthy things</span> are listed for sale. It will also help <span style={{ fontWeight: 600 }}>answer any questions</span> people have about the things they want to buy.<br />Eventually<span style={{ fontWeight: 600 }}> our mission </span>is to create a <span style={{ fontWeight: 600 }}>marketplace</span> where people can buy and sell everything<span style={{ fontWeight: 600 }}> without any worries.</span>
        </Text>
      </Flex>

    </Box>
  );
};

export default Info;
