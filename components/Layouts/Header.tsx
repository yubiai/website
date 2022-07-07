import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LogoYb from "../Logos/LogoYb";
import Link from "next/link";
import { useRouter } from "next/router";

const Links = [
  {
    label: "Ecosystem",
    href: "/ecosystem",
  },
  {
    label: "Community",
    href: "/community",
  },
  {
    label: "Faqs",
    href: "/faqs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

type LinkProps = {
  label: string;
  href: string;
  pathname: string;
};

const NavLink = ({ label, href, pathname }: LinkProps) => (
  <Button
    rounded={"none"}
    color="white"
    bg="transparent"
    boxShadow= "none"
    borderBottom={href == pathname ? '3px solid white' : 'none'}
    _hover={{
      textDecoration: "none",
      borderBottom: '3px solid white'
    }}
  >
    <Link  href={`${href}`}>{label}</Link>
  </Button>
);

export default function withAction() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const pathname = router.pathname;

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box display={{ base: "none", md: "flex" }}>
              <LogoYb />
            </Box>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              mr={"5em"}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, i) => (
                <NavLink key={i} label={link.label} href={link.href} pathname={pathname} />
              ))}
            </HStack>
            <Link href="https://app.yubiai.market">
              <Button variant={"solid"} color={"black"} size={"sm"} mr={4}>
                Launch App
              </Button>
            </Link>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, i) => (
                <NavLink key={i} label={link.label} href={link.href} pathname={pathname} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
