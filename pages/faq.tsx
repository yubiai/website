import { Box, Heading, Link, Stack, Text } from "@chakra-ui/react";
import BuyerFaqCard from "../components/Cards/buyerFaqCard";
import SellerFaqCard from "../components/Cards/sellerFaqCard";
import HeroFather from "../components/Layouts/HeroFather";

const Faq = () => {
  return (
    <>
      <HeroFather
        titleHead={"Yubiai Landing - Faqs"}
        titleFirst={"FAQ"}
        titleSecond={""}
        description={""}
      >
        <Box
          padding={"1.5em"}
          borderRadius={"5px"}
          boxShadow={"0 4px 4px 0 rgba(0, 0, 0, 0.25)"}
          bg="#191b30"
          color="white"
        >
          <Heading>
            <Text color="white">What is Yubiai?</Text>
          </Heading>
          <Text color="white">
            Yubiai is a decentralized marketplace that allows anyone with a wallet in metamask, and soon smart wallets, to buy and sell services using crypto.
          </Text>
          <Heading mt="0.25em">
            <Text color="white">How do I use Yubiai?</Text>
          </Heading>
          <Text color="white">
            Set up a Metamask wallet: If you don&apos;t already have one, create a Metamask wallet by visiting the official <Link href="https://metamask.io/" color="blue.400" isExternal>Metamask website</Link>  and install the extension for your web browser or use the MetaMask Mobile Browser from the MetaMask mobile app and start using the platform.
          </Text>
          <Text color="white">
            Visit Yubiai: Go to the <Link href="https://app.yubiai.market/" color="blue.400" isExternal>Yubiai app</Link>
          </Text>
          <Text color="white">
            Login: Connect your Metamask wallet to Yubiai by clicking on the Login button on the top right corner and follow the prompts(a popup window will appear and you will have to sign a message). This will allow you to securely access the platform.
          </Text>
          <Text color="white">
            Complete profile information: Head on to the top right corner on the navbar(below the Login button), you will see a profile Icon, click on it and select Profile.
          </Text>
          <Text color="white">
            Follow the instructions as Seller or Buyer below.
          </Text>
          <Heading mt="0.25em">
            <Text color="white">How does Yubiai work?</Text>
          </Heading>
          <Text color="white">
            Yubiai utilizes multiple layers of security to ensure a safe and trustworthy marketplace environment:
          </Text>
          <Text color="white">
            Interface Security: Yubiai employs a secure interface that interacts with the Kleros Escrow smart contract. This interface incorporates special encryption measures to protect sensitive data and transactions.
          </Text>
          <Text color="white">
            Kleros Escrow: The Kleros Escrow system is a vital component of Yubiai. It securely holds the payment for each transaction in escrow until the buyer and seller are both satisfied with the outcome. If any issues or disputes arise, the dispute resolution process is initiated.
          </Text>
          <Text color="white">
            Dispute Resolution: In the event of a dispute between the buyer and seller, the Kleros dispute resolution mechanism(built-in the escrow) comes into play. A decentralized panel of jurors examine the evidence provided by both parties and makes a fair and unbiased ruling to resolve the dispute.
          </Text>
          <Text color="white">
            Verified Accounts: Yubiai implements a badge system to verify the authenticity of user accounts, helping to prevent bots and ensure that transactions occur between real human beings. This adds an extra layer of trust and integrity to the platform.
          </Text>
          <Text color="white">
            Curate (Not yet implemented): Yubiai plans to introduce a feature called Curate, which will serve as a mechanism for reviewing and approving submitted items. This process will ensure that listings comply with country-specific regulations and meet the required submission criteria. Items that meet the guidelines will be published, while those that don&apos;t will be rejected.
          </Text>
          <Text color="white">
            By combining these layers of security, Yubiai aims to provide a safe and reliable marketplace experience for buyers and sellers. The platform&apos;s commitment to security, dispute resolution and curation helps build trust and ensures a fair and transparent environment for all users.
          </Text>
          <Heading mt="0.25em">
            <Text color="white">I want to invest. Are you raising funds?</Text>
          </Heading>
          <Text color="white">
            Yes, we are. Please, email us so we can discuss further these opportunities.
          </Text>
          <Heading mt="0.25em">
            <Text color="white">How much you have raised so far?</Text>
          </Heading>
          <Text color="white">
            So far, we have raised $50.000 as an initial Pre-Seed investment by participating in the incubator program of Cooperative Kleros.
          </Text>
          <Heading mt="0.25em">
            <Text color="white">Are you incorporated?</Text>
          </Heading>
          <Text color="white">
            We are in process of being incorporated.
          </Text>
          <Heading mt="0.25em">
            <Text color="white">I have a question that is not answered here.</Text>
          </Heading>
          <Text color="white">
            For any other questions, don’t hesitate to contact us at <Link href="mailto:contact@yubiai.market" color="blue.400">contact@yubiai.market</Link>
          </Text>
        </Box>
        <Stack
          direction={["column", "row"]}
          spacing={{ base: "24px", md: "24px" }}
          mt="1em"
          mb="2em"
        >
          <BuyerFaqCard />
          <SellerFaqCard />
        </Stack>
      </HeroFather>
    </>
  );
};

export default Faq;
