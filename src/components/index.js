import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Card,
  Tag,
  Avatar,
  Image,
  IconButton,
  useColorMode,
  Link,
  Spacer,
  Button,
  Circle,
  Container,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from './motion';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@chakra-ui/media-query';
import About from './about';
import Proyects from './projects';
import Contact from './contactForm';

const ANIMATION_DURATION = 0.5;
const color = 'blue.400';

function Index() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const DownloadPDF = () => {
    // using Java Script method to get PDF file
    fetch(process.env.PUBLIC_URL + '/RobertoArmijoCV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'RobertoArmijoCV.pdf';
        alink.click();
      });
    });
  };

  return (
    <Container maxW={'7xl'} pt={{ base: '7rem', md: '0' }}>
      <Stack>
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="300px"
          h="300px"
          alignSelf="flex-end"
        />
        <Flex
          direction={{
            base: 'column-reverse',
            sm: 'column-reverse',
            md: 'row',
          }}
          spacing="200px"
          p={{ base: '0', md: '32' }}
          wrap="no-wrap"
          minH="70vh"
          justify={{
            base: 'flex-start',
            sm: 'space-around',
            lg: 'space-between',
          }}
          align={{ base: 'center', md: 'flex-start' }}
        >
          <Box
            mt={{ base: '8', md: '0' }}
            textAlign={{ base: 'center', sm: 'initial' }}
          >
            <motion.div
              initial={{
                opacity: 0,
                translateX: 500,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                transition: {
                  duration: 0.5,
                },
              }}
            >
              <Text fontSize="5xl" fontWeight="semibold">
                Hola, Yo soy{' '}
                <Box
                  as="span"
                  fontSize="6xl"
                  fontWeight="bold"
                  bgGradient="linear-gradient(to right, #fdc830, #f37335)"
                  bgClip="text"
                >
                  Armijo
                </Box>
              </Text>

              <Text color={isDark ? 'gray.200' : 'gray.500'}>
                Mejorando todos los dias.
              </Text>
              <Text>Software Developer / Gamer / Salvadoreño</Text>
              <HStack
                mt={8}
                display="flex"
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                <Button
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => DownloadPDF()}
                >
                  Curriculum
                </Button>
                <Button
                  colorScheme="teal"
                  variant="outline"
                //onClick={() => {this.scroll(this.myRef)}}
                >
                  Contactame
                </Button>
              </HStack>
            </motion.div>
          </Box>

          <MotionBox
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            rounded="full"
          >
            <Avatar
              size="2xl"
              showBorder={true}
              boxShadow="lg"
              boxSize={{ base: '200px', md: '230px', lg: '250px' }}
              borderColor={color}
              src={process.env.PUBLIC_URL + '/yo.jpg'}
            />
          </MotionBox>
        </Flex>
      </Stack>
      <About />
      <Proyects />
      <Contact />
    </Container>
  );
}

export default Index;
