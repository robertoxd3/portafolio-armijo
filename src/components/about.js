import React, { useState } from 'react';
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
  useMediaQuery,
  Link,
  Container,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from './motion';
import { FaGraduationCap } from 'react-icons/fa';
import Company from './company-card';
import { motion } from 'framer-motion';
const ANIMATION_DURATION = 0.5;

function About() {
  const companies = [
    {
      title: 'Colegio Nazareth',
      alt: 'Escuela',
      role: 'Bachillerato General',
      skills: 'Web Development',
      period: '2001 - 2014',
      logo: 'https://www.colegionazareth.edu.sv/wp-content/uploads/2019/10/logoicon.png',
    },
    {
      title: 'Universidad Nacional de El Salvador',
      alt: 'Universidad',
      role: 'Ingeniería en Sistemas Informaticos',
      skills: 'Java, C#',
      period: '2015 - 2018',
      logo: 'https://biblioteca.aurens.com/universidades/colleges/logos/251.png',
    },
    {
      title: 'ITCA Fepade | Escuela Especializada en Ingeniería',
      alt: 'ITCA',
      role: 'Ingeniería en Desarrollo de Software',
      skills: 'C#, Java,CSS, React, JSP, PHP, Laravel',
      period: '2019 - Present',
      logo: 'https://www.itca.edu.sv/wp-content/themes/elaniin-itca/images/logoColor.png',
    },
  ];
  const color = 'blue.400';

  return (
    <Container maxW={'7xl'} pt={{ base: '5rem', md: '1' }}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 5, md: 10 }}
        maxWidth="68rem"
        marginLeft="auto"
        marginRight="auto"
      >
        <Flex direction={['column', 'column', 'row']}>
          <MotionBox
            opacity="0"
            initial={{
              translateX: -150,
              opacity: 0,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
              transition: {
                duration: ANIMATION_DURATION,
              },
            }}
            m="auto"
            mb={[16, 16, 'auto']}
          >
            <MotionBox whileHover={{ scale: 1.5 }} rounded="full" shadow="lg">
              <Avatar
                size="2xl"
                showBorder={true}
                borderColor={color}
                src={process.env.PUBLIC_URL + "/yo.jpg"}
              />
            </MotionBox>
          </MotionBox>
          <MotionFlex
            position="relative"
            ml={['auto', 'auto', 16]}
            m={['auto', 'auto']}
            w={['90%', '85%', '80%']}
            opacity="0"
            justify="center"
            direction="column"
            initial={{
              opacity: 0,
              translateX: 150,
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: ANIMATION_DURATION,
              },
            }}
          >
            <Box position="relative">
              <MotionBox whileHover={{ translateY: -5 }} width="max-content">
                <Heading textAlign="left">Hey!👋🏽</Heading>
              </MotionBox>
            </Box>
            <Text
              maxW={'3xl'}
              fontSize="2xl"
              fontWeight="400"
              textAlign="justify"
            >
              Mi nombre es Roberto Armijo y soy un Desarrollador de Software el
              cual le apasiona la programación, nacido en El Salvador 🇸🇻.
            </Text>
            <Text
              maxW={'3xl'}
              fontSize="2xl"
              fontWeight="400"
              mt={3}
              textAlign="justify"
            >
              Esta es mi zona digital, donde escribo y comparto sobre las cosas
              que he aprendido a lo largo de los años 😎.
            </Text>
          </MotionFlex>
        </Flex>
      </Stack>
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
        <VStack spacing={4} marginBottom={6} mt={5} px={3}>
          <Heading>
            <Flex alignItems="center">
              <Text as="span">Educación</Text>
              <Stack pl={2}>
                <Box as={FaGraduationCap} />
              </Stack>
            </Flex>
          </Heading>

          {companies.map((company, index) => (
            <Company
              key={index}
              title={company.title}
              role={company.role}
              skills={company.skills}
              period={company.period}
              logo={company.logo}
              alt={company.alt}
            />
          ))}
        </VStack>
      </motion.div>
    </Container>
  );
}

export default About;
