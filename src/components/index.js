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
  Spacer,
  Button,
  Circle,
  Container,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { MotionBox, MotionFlex } from './motion';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@chakra-ui/media-query';
import About from './about';
import Proyects from './projects';
import Contact from './contactForm';
import LandingPage from './landingPage';
import { useNavigate } from "react-router-dom";

const ANIMATION_DURATION = 0.5;
const color = 'blue.400';

function Index() {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const DownloadPDF = () => {
    // using Java Script method to get PDF file
    fetch(process.env.PUBLIC_URL + '/RobertoArmijoCV2023.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'RobertoArmijoCV2023.pdf';
        alink.click();
      });
    });
  };

  return (
    <Container maxW={'7xl'} pt={{ base: '9rem', md: '0' }}>

      <LandingPage />
      <div id="seccionDestino">
        <About />
      </div>
      <Proyects />
      <Contact />
    </Container>
  );
}

export default Index;
