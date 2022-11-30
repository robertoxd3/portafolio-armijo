import { Box, IconButton, Stack, Text, Avatar } from '@chakra-ui/react';
import {
  FaGithub,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaVoicemail,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      maxWidth="68rem"
      marginX="auto"
      pt="2rem"
      pb="5"
      mt="1.5rem"
      px={10}
      w="100%"

      //borderTop="1px solid"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={3}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        <Text fontSize={{ base: '16px', md: '16px' }}>
          &copy; 2022 Roberto Armijo
        </Text>

        <Stack spacing={2} direction={{ base: 'row', md: 'row' }}>
          <IconButton
            variant="ghost"
            colorScheme="messenger"
            aria-label="Send email"
            icon={<FaEnvelope />}
          />
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="Github"
            icon={<FaGithub />}
          />
          <IconButton
            variant="ghost"
            colorScheme="messenger"
            aria-label="Github"
            icon={<FaTwitter />}
          />
          <IconButton
            variant="ghost"
            colorScheme="facebook"
            aria-label="Github"
            icon={<FaFacebook />}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
