import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import setLanguage from 'next-translate/setLanguage';
import Cookies from 'js-cookie';


const LanguageChange: React.FC = () => {
  const { lang } = useTranslation('common');

  const changeLang = async (lng: string) => {
    await setLanguage(lng);

    // Save Cookies
    const date = new Date();
    const expireMs = 100 * 24 * 60 * 60 * 1000; // 100 days
    date.setTime(date.getTime() + expireMs);
    Cookies.set('NEXT_LOCALE', lng, { expires: 30, secure: true });
  };

  return (
    <Menu >
      <MenuButton
        marginRight={{base:"0", md:"10px"}}
        style={{border: "1px solid white", height:"40px"}}
        as={Button}
        aria-label="language"
        rightIcon={<ChevronDownIcon />}
        backgroundColor="transparent"
        color="white"
        //ml="1em"
        p={{ base:"6px", md: "1em" }}
        _hover={{ bg: '#1C538A', color: 'gray.200' }}
        _expanded={{ bg: 'blue.400' }}
        _focus={{ boxShadow: 'outline' }}
        
        // isDisabled
      >
        {lang ? lang.toUpperCase() : 'LANG'}
      </MenuButton>
      <MenuList style={{ minWidth: "fit-content" }}>
        {lang !== "en" && <MenuItem  onClick={() => changeLang('en')}>EN</MenuItem>}
        {lang !== "es" && <MenuItem onClick={() => changeLang('es')}>ES</MenuItem>}
      </MenuList>
    </Menu>
  );
};

export default LanguageChange;
