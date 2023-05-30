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
            Yubiai is a decentralized marketplace that allows any people
            registered in proof of humanity to buy and sell everything using
            crypto.
          </Text>
          <Heading mt="1em">
            <Text color="white">How do I use Yubiai?</Text>
          </Heading>
          <Text color="white">
          If you are already registered in Proof Of Humanity or Lens, you can Login with your wallet from PoH or Lens on <Link href="https://app.yubiai.market/" color="blue.400" isExternal>app.yubiai.market</Link> and start using the platform. If you are not registered yet, you can create a new Metamask wallet and register at <Link href="https://app.proofofhumanity.id/" color="blue.400" isExternal>https://app.proofofhumanity.id/</Link> or claim your ID(Lens) in TalentLayer <Link href="https://claim.talentlayer.org/" color="blue.400" isExternal>https://claim.talentlayer.org/</Link> and sign as Lens.
          </Text>
          <Heading mt="1em">
            <Text color="white">How does Yubiai work?</Text>
          </Heading>
          <Text color="white">
            Yubiai has three layers of security, one is proofofhumanity as
            identity and authentication method, the other ones are Kleros
            Escrow, dispute resolution and curate. PoH acts a sybil resistance
            mechanism so you know that you are transactioning with a real human,
            the kleros escrow holds the payment of every transaction and if
            anything goes well it releases the payment to the seller or if
            anything goes sideways the dispute resolver kicks in and a juror
            will decide upon evidence how to rule. And there is the last
            mechanism that is curate, in every submission of an item, if it is
            inside the scope or regulations of each country and specifications
            of submission your item will be published if not it will get
            rejected.
          </Text>
          <Heading mt="1em">
            <Text color="white">I want to invest. Are you raising funds?</Text>
          </Heading>
          <Text color="white">
            Yes, we are. Please, email us so we can discuss further these opportunities.
          </Text>
          <Heading mt="1em">
            <Text color="white">How much you have raised so far?</Text>
          </Heading>
          <Text color="white">
            So far, we have raised $50.000 as an initial Pre-Seed investment by participating in the incubator program of Cooperative Kleros.
          </Text>
          <Heading mt="1em">
            <Text color="white">Are you incorporated?</Text>
          </Heading>
          <Text color="white">
          We are in process of being incorporated.
          </Text>
          <Heading mt="1em">
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
