import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Container,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import LogoYb from "../Logos/LogoYb";
import LanguageChange from "../Buttons/translButton";
import { ColorModeToggler } from "../Buttons/darkModeButton";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation("header");

  const NAV_ITEMS: Array<NavItem> = [

    {
      label: t('Home'),
      href: '/',
    },
    {
      label: t('Ecosystem'),
      href: '/ecosystem',
    },
    {
      label: t("Community"),
      href: "/community"
    },
    {
      label: 'Docs',
      children: [
        {
          label: 'White Paper',
          subLabel: 'View the document',
          href: 'https://docs.google.com/document/d/e/2PACX-1vST-lArWWV8urj3phEiWmzPZ3fnySB6EqW3IRyr2rrf7MakpfsmLhpvlOn9nLUvp-IZ98JlnfJJmR5i/pub',
        },
        {
          label: 'Yellow Paper',
          subLabel: 'View the document',
          href: 'https://docs.google.com/document/d/e/2PACX-1vR0KPcbPuv9edabvnBQT2n38xtDLSvF7WdaOMBheZOS6j-KnsVE1pgTtuHzCfWwQRZOaWSzZjLa5pcY/pub',
        },
        {
          label: 'One Pager',
          subLabel: 'View the document',
          href: 'https://docs.google.com/document/d/e/2PACX-1vRnA85e-7FNmOqShC-dInQd6kSNupYsLHR4-F3gUby5YAdNxGovGzvGwd0Ka1xCFfkZm2qdHW_6v9Sj/pub',
        },
        {
          label: 'Deck',
          subLabel: 'View the document',
          href: '/static/yubiai_deck.pdf',
        },
      ],
    },
    {
      label: "FAQ",
      href: "/faq"
    }
  ];

  return (
    <Box

      sx={{ position: "sticky", top: "0", zIndex: "99", background: "rgba(29, 39, 61, 0.9)", backdropFilter: "blur(4px)" }}
    >

      <Container
        px={4} style={{ display: "flex", justifyContent: "center" }}>

        <Flex
          color={'white'}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 1 }}>

          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            marginTop={"0.3em"}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex

            flex={{ base: 1 }}
            justify={{ base: 'center', md: 'start' }}>
            <Box
              width={"137px"}
              marginRight={"1.2em"}
              display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
            >
              <LogoYb />
            </Box>

            <Flex display={{ base: 'none', md: 'flex' }} ml={{ md: -4 }} marginTop={"0.3em"}>
              <DesktopNav />
            </Flex>
          </Flex>

          <LanguageChange />
          <ColorModeToggler />

        </Flex>
        <Stack
          flex={{ base: 1, md: 1 }}
          justify={'flex-end'}
          direction={'row'}
          align={'center'}
          spacing={5}>
          <a href={"https://app.yubiai.market"} target="_blank" rel="noopener noreferrer">
            <Button
              variant={"solid"}
              color={"#00BCD4"}
              bg="white"
              size={{ base: "sm", sm: "sm", md: "md" }}
              mr={0}
            >
              {t("Launch App")}
            </Button>
          </a>
        </Stack>

      </Container>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = 'red';
  const linkHoverColor = 'blue.400';
  const popoverContentBgColor = 'black';
  const router = useRouter();
  const { t } = useTranslation("header");

  const NAV_ITEMS: Array<NavItem> = [

    {
      label: t('Home'),
      href: '/',
    },
    {
      label: t('Ecosystem'),
      href: '/ecosystem',
    },
    {
      label: t("Community"),
      href: "/community"
    },
    {
      label: 'Docs',
      children: [
        {
          label: 'White Paper',
          subLabel: 'View the document',
          href: 'https://docs.google.com/document/d/e/2PACX-1vST-lArWWV8urj3phEiWmzPZ3fnySB6EqW3IRyr2rrf7MakpfsmLhpvlOn9nLUvp-IZ98JlnfJJmR5i/pub',
        },
        {
          label: 'Yellow Paper',
          subLabel: 'View the document',
          href: 'https://docs.google.com/document/d/e/2PACX-1vR0KPcbPuv9edabvnBQT2n38xtDLSvF7WdaOMBheZOS6j-KnsVE1pgTtuHzCfWwQRZOaWSzZjLa5pcY/pub',
        },
        {
          label: 'One Pager',
          subLabel: 'View the document',
          href: 'https://docs.google.com/document/d/e/2PACX-1vRnA85e-7FNmOqShC-dInQd6kSNupYsLHR4-F3gUby5YAdNxGovGzvGwd0Ka1xCFfkZm2qdHW_6v9Sj/pub',
        },
        {
          label: 'Deck',
          subLabel: 'View the document',
          href: '/static/yubiai_deck.pdf',
        },
      ],
    },
    {
      label: "FAQ",
      href: "/faq"
    }
  ];

  return (
    <Stack
      direction={'row'}
      spacing={{ md: 1, lg: 2, xl: 2 }}
      marginRight={{ base: "0", md: "0", lg: "11px", xl: "11px" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              {
                navItem.href && !navItem.children ? (
                  <Link href={`${navItem.href && !navItem.children ? navItem.href : null}`}>
                    <Button
                      rounded={"none"}
                      color="white"
                      bg="transparent"
                      boxShadow="none"
                      borderBottom={navItem.href == router.pathname ? "3px solid white" : "none"}
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      {navItem.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    rounded={"none"}
                    color="white"
                    bg="transparent"
                    boxShadow="none"
                    borderBottom={navItem.href == router.pathname ? "3px solid white" : "none"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {navItem.label}
                  </Button>
                )
              }

            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Box
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{
          bg: 'gray.900'
        }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: '#dd6a6a' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'#dd6a6a'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    </a>
  );
};

const MobileNav = () => {
  const { t } = useTranslation("header");

  const NAV_ITEMS: Array<NavItem> = [

    {
      label: t('Home'),
      href: '/',
    },
    {
      label: t('Ecosystem'),
      href: '/ecosystem',
    },
    {
      label: t("Community"),
      href: "/community"
    },
    {
      label: 'Docs',
      children: [
        {
          label: 'White Paper',
          subLabel: 'View the document',
          href: 'https://docs.google.com/document/d/e/2PACX-1vST-lArWWV8urj3phEiWmzPZ3fnySB6EqW3IRyr2rrf7MakpfsmLhpvlOn9nLUvp-IZ98JlnfJJmR5i/pub',
        },
        {
          label: 'Yellow Paper',
          subLabel: 'View the document',
          href: 'https://docs.google.com/document/d/e/2PACX-1vR0KPcbPuv9edabvnBQT2n38xtDLSvF7WdaOMBheZOS6j-KnsVE1pgTtuHzCfWwQRZOaWSzZjLa5pcY/pub',
        },
        {
          label: 'One Pager',
          subLabel: 'View the document',
          href: 'https://docs.google.com/document/d/e/2PACX-1vRnA85e-7FNmOqShC-dInQd6kSNupYsLHR4-F3gUby5YAdNxGovGzvGwd0Ka1xCFfkZm2qdHW_6v9Sj/pub',
        },
      ],
    },
    {
      label: "FAQ",
      href: "/faq"
    }
  ];

  return (
    <Stack

      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();


  return (
    <Stack

      spacing={4}
      onClick={children && onToggle} >
      <Flex

        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child, i) => (
              <div key={i}>
                <Link href={child && child.href ? child.href : ""}>
                  <Box key={child.label} py={2} >
                    {child.label}
                  </Box>
                </Link>
              </div>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;

}

const NAV_ITEMS: Array<NavItem> = [

  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Ecosystem',
    href: '/ecosystem',
  },
  {
    label: "Community",
    href: "/community"
  },
  {
    label: 'Docs',
    children: [
      {
        label: 'White Paper',
        subLabel: 'View the document',
        href: 'https://docs.google.com/document/d/e/2PACX-1vST-lArWWV8urj3phEiWmzPZ3fnySB6EqW3IRyr2rrf7MakpfsmLhpvlOn9nLUvp-IZ98JlnfJJmR5i/pub',
      },
      {
        label: 'Yellow Paper',
        subLabel: 'View the document',
        href: 'https://docs.google.com/document/d/e/2PACX-1vR0KPcbPuv9edabvnBQT2n38xtDLSvF7WdaOMBheZOS6j-KnsVE1pgTtuHzCfWwQRZOaWSzZjLa5pcY/pub',
      },
      {
        label: 'One Pager',
        subLabel: 'View the document',
        href: 'https://docs.google.com/document/d/e/2PACX-1vRnA85e-7FNmOqShC-dInQd6kSNupYsLHR4-F3gUby5YAdNxGovGzvGwd0Ka1xCFfkZm2qdHW_6v9Sj/pub',
      },
      {
        label: 'Deck',
        subLabel: 'View the document',
        href: '/static/yubiai_deck.pdf',
      },
    ],
  },
  {
    label: "FAQ",
    href: "/faq"
  }
];