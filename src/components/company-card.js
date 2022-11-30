import {
  Box,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { MotionBox } from './motion';

function Company({
  title,
  role,
  skills,
  period,
  logo,
  colorMode,
  alt,
  isEducation = false,
}) {
  return (
    <MotionBox whileHover={{ translateY: -6 }} width="100%" maxWidth="60rem">
      <Box
        px={4}
        py={6}
        borderWidth="2px"
        _hover={{ shadow: 'lg' }}
        rounded="md"
        width="100%"
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Flex justifyContent="space-between">
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              fallbackSrc={'/assets/images/placeholder.png'}
              src={logo}
              alt={alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {title}
              </Heading>
              <Heading
                align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={['none', 'none', 'flex', 'flex']}
              ></Stack>
            </Stack>
          </Flex>
          <Stack display={['none', 'none', 'flex', 'flex']}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          //display={['flex', 'flex', 'none', 'none']}
        >
          {skills.split(',').map(skill => (
            <Tag size="sm" padding="0 3px" key={skill} fontWeight="bold">
              {skill}
            </Tag>
          ))}
        </Stack>
      </Box>
    </MotionBox>
  );
}

export default Company;
