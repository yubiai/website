import { Box, Heading, Link, Stack, Text, Divider, Flex } from "@chakra-ui/react";
import BuyerFaqCard from "../components/Cards/buyerFaqCard";
import SellerFaqCard from "../components/Cards/sellerFaqCard";
import HeroFather from "../components/Layouts/HeroFather";


const Faq = () => {
  return (
    <>

      <HeroFather
        titleHead={"Yubiai Landing - Faqs"}
        titleFirst={"Here are some of the frequent asked questions"}
        titleSecond={""}
        description={""}
      >
        <Flex flexDir={"column"} w={"100%"}>
          <Flex
            flexDir={"column"}
            w={{ base: "100%", md: "100%", lg: "799px" }}


          >
            <Text
              fontSize={"24px"}
              color={"white"}
            >
              For any other questions, don’t hesitate to contact us at{" "}
              <Link textDecoration={"underline"} href="mailto:contact@yubiai.market">contact@yubiai.market</Link> or on our social media.
            </Text>
            <Box
              padding={"1.5em"}
              //borderRadius={"5px"}
              //boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
              //bg="#191b30"
              color="white"
            >
              <Heading>
                <Text
                  fontSize={"42px"}
                  color="white">What is Yubiai?</Text>
              </Heading>
              <Text mt={"1em"} color="#001664">
                Yubiai is a decentralized marketplace that allows anyone with a wallet in metamask, and soon smart wallets, to buy and sell services using crypto.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text fontSize={"42px"} color="white">How do I use Yubiai?</Text>
              </Heading>
              <Text mt={"1em"} color="#001664">
                <a style={{ fontWeight: "600" }}>1. Set up a Metamask wallet:</a> If you don&apos;t already have one, create a Metamask wallet by visiting the official <Link href="https://metamask.io/" color="white" isExternal>Metamask website</Link>  and install the extension for your web browser or use the MetaMask Mobile Browser from the MetaMask mobile app.
              </Text>
              <Text color="#001664">
                <a style={{ fontWeight: "600" }}>2. Visit Yubiai:</a> Go to the <Link href="https://app.yubiai.market/" color="white" isExternal>Yubiai app</Link>
              </Text>
              <Text color="#001664">
                <a style={{ fontWeight: "600" }}>3. Login:</a> Connect your Metamask wallet to Yubiai by clicking on the Login button on the top right corner and follow the prompts(a popup window will appear and you will have to sign a message). This will allow you to securely access the platform.
              </Text>
              <Text color="#001664">
                <a style={{ fontWeight: "600" }}>4. Complete profile information:</a> Head on to the top right corner on the navbar(below the Login button), you will see a profile Icon, click on it and select Profile.
              </Text>
              <Text color="#001664">
                Follow the instructions as <Link href="#sellerSection">Seller</Link> or <Link href="#buyerSection">Buyer</Link> below.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text fontSize={"42px"} color="white">How does Yubiai work?</Text>
              </Heading>
              <Text mt={"1em"} color="#001664">
                Yubiai utilizes multiple layers of security to ensure a safe and trustworthy marketplace environment:
              </Text>
              <Text mt={"0.25em"} color="#001664">
                <a style={{ fontWeight: "600" }}>Interface Security:</a> Yubiai employs a secure interface that interacts with the Kleros Escrow smart contract. This interface incorporates special encryption measures to protect sensitive data and transactions.
              </Text>
              <Text color="#001664">
                <a style={{ fontWeight: "600" }}>Kleros Escrow:</a> The Kleros Escrow system is a vital component of Yubiai. It securely holds the payment for each transaction in escrow until the buyer and seller are both satisfied with the outcome. If any issues or disputes arise, the dispute resolution process is initiated.
              </Text>
              <Text color="#001664">
                <a style={{ fontWeight: "600" }}>Dispute Resolution:</a> In the event of a dispute between the buyer and seller, the Kleros dispute resolution mechanism(built-in the escrow) comes into play. A decentralized panel of jurors examine the evidence provided by both parties and makes a fair and unbiased ruling to resolve the dispute.
              </Text>
              <Text color="#001664">
                <a style={{ fontWeight: "600" }}>Verified Accounts:</a> Yubiai implements a badge system to verify the authenticity of user accounts, helping to prevent bots and ensure that transactions occur between real human beings. This adds an extra layer of trust and integrity to the platform.
              </Text>
              <Text color="#001664">
                <a style={{ fontWeight: "600" }}>Curate (Not yet implemented):</a> Yubiai plans to introduce a feature called Curate, which will serve as a mechanism for reviewing and approving submitted items. This process will ensure that listings comply with country-specific regulations and meet the required submission criteria. Items that meet the guidelines will be published, while those that don&apos;t will be rejected.
              </Text>
              <Text mt={"0.25em"} color="#001664">
                By combining these layers of security, Yubiai aims to provide a safe and reliable marketplace experience for buyers and sellers. The platform&apos;s commitment to security, dispute resolution and curation helps build trust and ensures a fair and transparent environment for all users.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text fontSize={"42px"} color="white">I want to invest. Are you raising funds?</Text>
              </Heading>
              <Text mt={"1em"} color="#001664">
                Yes, we are. Please, email us so we can discuss further these opportunities.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text fontSize={"42px"} color="white">How much you have raised so far?</Text>
              </Heading>
              <Text mt={"1em"} color="#001664">
                So far, we have raised $50.000 as an initial Pre-Seed investment by participating in the incubator program of Cooperative Kleros.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text color="white">Are you incorporated?</Text>
              </Heading>
              <Text mt={"1em"} color="#001664">
                We are in process of being incorporated.
              </Text>
              <Divider my={4} borderColor={"black"} />
              <Heading mt="0.25em">
                <Text color="white">I have a question that is not answered here.</Text>
              </Heading>
              <Text mt={"1em"} color="#001664">
                For any other questions, don’t hesitate to contact us at <Link href="mailto:contact@yubiai.market" color="white">contact@yubiai.market</Link>
              </Text>
              <Divider my={4} borderColor={"black"} />
            </Box>
            <Stack
              direction={["column", "row"]}
              spacing={{ base: "24px", md: "24px" }}
              mt="0.2em"
              mb="2em"
            >
              <BuyerFaqCard />
              <SellerFaqCard />
            </Stack>
          </Flex>
        </Flex >
      </HeroFather>

    </>
  );
};

export default Faq;
