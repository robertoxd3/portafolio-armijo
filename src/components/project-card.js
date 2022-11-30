import React, { useState } from 'react';
import {
  HStack,
  VStack,
  Text,
  Tag,
  Flex,
  Link,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  useColorModeValue,
  useDisclosure,
  ModalContent,
  Icon,
} from '@chakra-ui/react';
import { AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from './carousel';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';

//import LazyImage from './lazy-image';

function ProjectCard({ title, description, img, link, technologies }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [esAbierto, setesAbierto] = useState(false);
  const toggleOpen = () => setesAbierto(!esAbierto);

  let boxBg = useColorModeValue('white !important', '#121212 !important');
  let mainText = useColorModeValue('gray.800', 'white');
  let iconBox = useColorModeValue('gray.100', 'whiteAlpha.200');
  let iconColor = useColorModeValue('brand.200', 'white');

  return (
    <>
      <Flex
        borderRadius="20px"
        bg={boxBg}
        direction={['column']}
        p="20px"
        rounded="xl"
        borderWidth="1px"
        w="100%"
        h="100%"
        spacing={4}
        cursor="pointer"
        _hover={{ shadow: 'lg' }}
      >
        <Flex w="100%" mb="18px">
          <Flex
            w="38px"
            h="38px"
            align="center"
            justify="center"
            borderRadius="50%"
            me="12px"
            bg={iconBox}
          >
            <Icon w="24px" h="24px" as={FaCode} color={iconColor} />
          </Flex>
          <Text
            my="auto"
            fontWeight="600"
            color={mainText}
            textAlign="center"
            fontSize="xl"
            me="auto"
          >
            {title}
          </Text>
          <Button
            w="38px"
            h="38px"
            align="center"
            justify="center"
            borderRadius="12px"
            me="12px"
            bg={iconBox}
            onClick={onOpen}
          >
            <Icon w="24px" h="24px" as={FiMoreHorizontal} color={iconColor} />
          </Button>
        </Flex>

        <Flex w="100%" h="100%" alignItems="center" mb={2}>
          <Carousel logo={img} />
        </Flex>
        <motion.div layout onClick={toggleOpen}>
          <VStack align="start" justify="flex-start">
            <VStack spacing={0} align="start">
              <Flex mt="auto" justify="space-between" w="100%" align="center">
                <Text
                  as={Link}
                  href={link}
                  fontWeight="600"
                  fontSize="lg"
                  noOfLines={1}
                  onClick={e => e.stopPropagation()}
                  isExternal
                >
                  {title}
                </Text>
                <HStack spacing="1">
                  {technologies.map((tech, index) => (
                    <Tag size="sm" key={index}>
                      {tech}
                    </Tag>
                  ))}
                </HStack>
              </Flex>
              <AnimatePresence>
                <motion.div
                  layout
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                >
                  {!esAbierto && (
                    <div>
                      <Text
                        fontSize="sm"
                        textAlign="justify"
                        noOfLines={{ base: 2 }}
                      >
                        {description}
                      </Text>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
                >
                  {esAbierto && (
                    <Text fontSize="sm" textAlign="justify">
                      {description}
                    </Text>
                  )}
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                <motion.div>
                  <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    isCentered
                    allowPinchZoom
                  >
                    <ModalOverlay />
                    <ModalContent bg="none" maxW="40rem" w="auto">
                      <ModalCloseButton />
                      <ModalBody p={8} rounded="lg" bg="Menu">
                        <ModalCloseButton />
                        <VStack>
                          <Carousel logo={img} />
                          <Text
                            as={Link}
                            href={link}
                            alignSelf="flex-start"
                            fontWeight="bold"
                            fontSize="md"
                            noOfLines={1}
                            onClick={e => e.stopPropagation()}
                            isExternal
                          >
                            {title}
                          </Text>
                          <Text fontSize="sm" fontWeight={'bold'}>
                            {description}
                          </Text>
                          <HStack>
                            <Link
                              href={link}
                              isExternal
                              borderRadius={{ base: '5px' }}
                              _hover={{
                                background: '#34495E',
                                color: '#fff',
                              }}
                            >
                              <AiFillGithub fontSize="2.5rem" />
                            </Link>
                            <Link
                              href={link}
                              isExternal
                              borderRadius={{ base: '5px' }}
                              _hover={{
                                background: '#34495E',
                                color: '#fff',
                              }}
                            >
                              <AiOutlineFundProjectionScreen fontSize="2.5rem" />
                            </Link>
                          </HStack>
                        </VStack>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
                </motion.div>
              </AnimatePresence>
            </VStack>
          </VStack>
        </motion.div>
      </Flex>
    </>
  );
}

export default ProjectCard;
