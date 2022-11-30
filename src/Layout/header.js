import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Image,
  IconButton,
  useColorMode,
  useMediaQuery,
  Link,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiSun, FiMenu } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

import { motion, AnimatePresence } from 'framer-motion';
const breakpoints = ['360px', '768px', '1024px', '1440px'];
breakpoints.base = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const MenuItems = ({ colorMode, children }) => (
  <Text
    mt={{ base: 4, md: 0 }}
    mr={6}
    display="block"
    _hover={{ textDecoration: 'underline' }}
  >
    {children}
  </Text>
);

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true,
};

const Header = props => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode, toggleColorMode } = useColorMode();
  //const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      marginLeft="auto"
      marginRight="auto"
      paddingTop="1rem"
      //backgroundColor={{ base: 'rgba(255,255,255,0.1)', md: '' }}
      backdropFilter={'blur(16px) saturate(110%)'}
      //outline="1px solid rgba(209, 213, 219, 0.3)"
      position={{ base: 'fixed', md: 'static' }}
      maxWidth={{ base: '100%', md: '68rem' }}
      width="100%"
      zIndex={100}
      {...props}
    >
      <Flex
        align="center"
        mr={{ md: '5' }}
        width={{ base: '100%', md: 'auto' }}
        justifyContent={{ base: 'space-between', md: 'flex-start' }}
      >
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          <Link as={NavLink} to="/portafolio-armijo" onClick={() => setShow(false)}>
            <Image boxSize="60px" objectFit="cover" src={process.env.PUBLIC_URL + "/logoC.svg"} />
          </Link>
        </Heading>

        <IconButton
          size={'md'}
          icon={
            show ? (
              <AiOutlineClose fontSize="2.5rem" />
            ) : (
              <FiMenu fontSize="2.5rem" />
            )
          }
          aria-label={'Open Menu'}
          display={{ base: 'block', md: 'none' }}
          onClick={handleToggle}
        />
      </Flex>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: '100%', md: 'auto' }}
        justifyContent="flex-end"
        alignItems="center"
        flexGrow={1}
        //CAMBIAR HEIGHT PARA NORMAL y los textalign de los links y el mt para volver antes
        height={{ base: '100vh', md: '0' }}
      >
        <Link
          as={NavLink}
          to="/portafolio-armijo"
          textAlign={{ base: 'center', md: '' }}
          fontWeight={{ base: 'bold', md: '' }}
          borderRadius={{ base: '5px' }}
          mb={{ base: '5', md: '0' }}
          mr={{ base: '0', md: '3' }}
          mt={{ base: '2', md: '0' }}
          padding="0.7rem"
          display={{ base: 'block' }}
          _hover={{
            //background: colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#463d3de0',
            background: '#34495E',
            color: '#fff',
          }}
          onClick={() => setShow(false)}
        >
          Inicio
        </Link>

        <Link
          as={NavLink}
          to="/portafolio-armijo/about"
          textAlign={{ base: 'center', md: '' }}
          fontWeight={{ base: 'bold', md: '' }}
          borderRadius={{ base: '5px' }}
          mb={{ base: '5', md: '0' }}
          mr={{ base: '0', md: '3' }}
          mt={{ base: '2', md: '0' }}
          padding="0.7rem"
          display={{ base: 'block' }}
          _visited={{ outline: 'none' }}
          _hover={{
            // background: colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#34495E',
            background: '#34495E',
            color: '#fff',
          }}
          onClick={() => setShow(false)}
        >
          Acerca
        </Link>

        <Link
          as={NavLink}
          to="/portafolio-armijo/contact"
          textAlign={{ base: 'center', md: '' }}
          fontWeight={{ base: 'bold', md: '' }}
          borderRadius={{ base: '5px' }}
          mb={{ base: '5', md: '0' }}
          mr={{ base: '0', md: '3' }}
          mt={{ base: '2', md: '0' }}
          padding="0.7rem"
          display={{ base: 'block' }}
          _hover={{
            // background: colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#34495E',
            background: '#34495E',
            color: '#fff',
          }}
          onClick={() => setShow(false)}
        >
          Contacto
        </Link>
        <Link
          as={NavLink}
          to="/portafolio-armijo/projects"
          textAlign={{ base: 'center', md: '' }}
          fontWeight={{ base: 'bold', md: '' }}
          borderRadius={{ base: '5px' }}
          mb={{ base: '5', md: '0' }}
          mr={{ base: '0', md: '3' }}
          mt={{ base: '2', md: '0' }}
          padding="0.7rem"
          display={{ base: 'block' }}
          _hover={{
            // background: colorMode === 'light' ? 'rgba(0, 0, 0, 0.7)' : '#34495E',
            background: '#34495E',
            color: '#fff',
          }}
          onClick={() => setShow(false)}
        >
          Proyectos
        </Link>
      </Box>

      <Box
        mt={{ md: 0 }}
        position={{ base: 'absolute', md: 'unset' }}
        top="1.5rem"
        right="5.5rem"
      >
        <IconButton
          aria-label="Color Mode"
          icon={colorMode === 'light' ? <FaMoon /> : <FiSun />}
          onClick={toggleColorMode}
          size="lg"
          isRound={true}
          {...iconProps}
        />
      </Box>
    </Flex>
  );
};

export default Header;
