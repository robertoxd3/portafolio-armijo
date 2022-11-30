import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Icon,
  Avatar,
  Button,
  Image,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

function Carousel({ logo }) {
  let bgArrows = useColorModeValue('#85929E', '#283747');
  let mainText = useColorModeValue('#1E1E1E', '');
  let colorArrows = useColorModeValue('black', 'white');
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: { colorArrows },
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'rgba(0,0,0,0.6)',
    },
  };

  const slides = logo;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide(s => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = slide => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: 150,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <Flex w="full" alignItems="center" justifyContent="center">
        <Flex w="full" overflow="hidden" pos="relative">
          <Flex h="300" w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                <Text
                  color={mainText}
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image
                  src={slide}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                  objectFit="contain"
                />
              </Box>
            ))}
          </Flex>
          <Text
            color={colorArrows}
            {...arrowStyles}
            left="0"
            onClick={prevSlide}
          >
            &#10094;
          </Text>
          <Text
            color={colorArrows}
            {...arrowStyles}
            right="0"
            onClick={nextSlide}
          >
            &#10095;
          </Text>
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({ length: slidesCount }).map((_, slide) => (
              <Box
                key={`dots-${slide}`}
                cursor="pointer"
                boxSize={['7px', null, '15px']}
                m="0 2px"
                bg={
                  currentSlide === slide ? 'blackAlpha.800' : 'blackAlpha.500'
                }
                rounded="50%"
                display="inline-block"
                transition="background-color 0.6s ease"
                _hover={{ bg: 'blackAlpha.800' }}
                onClick={() => setSlide(slide)}
              ></Box>
            ))}
          </HStack>
        </Flex>
      </Flex>
    </motion.div>
  );
}

export default Carousel;
