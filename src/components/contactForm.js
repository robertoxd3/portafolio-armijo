import React, { useRef } from 'react';
import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Heading,
  Flex,
  FormControl,
  Icon,
  useToast,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Textarea,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import emailjs, { sendForm } from '@emailjs/browser';
import { AiOutlineMail } from 'react-icons/ai';

export default function ContactForm(props) {
  let iconColor = useColorModeValue('brand.200', 'white');
  const form = useRef();
  const toast = useToast();
  function sendEmail(event) {
    emailjs
      .sendForm(
        'service_mo095a5',
        'template_yvi975q',
        form.current,
        'NAZYUPZPJ1xUD2Q00'
      )
      .then(
        result => {
          console.log(result.text);
          toast({
            title: 'Mensaje Enviado.',
            description: 'El mensaje fue enviado con exito',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        },
        error => {
          console.log(error.text);
          toast({
            title: 'Mensaje no fue enviado.',
            description: 'El mensaje no pudo ser enviado, intente más tarde',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      );
  }

  return (
    <>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        pt={{ base: '5rem', md: '4rem' }}
      >
        <Box
          p={6}
          rounded="md"
          alignItems="center"
          justifyContent="center"
          w="100%"
          maxWidth="65rem"
        >
          <HStack>
            <Icon w="24px" h="24px" as={AiOutlineMail} color={iconColor} />
            <Heading size="lg" fontSize="30px">
              Contáctame
            </Heading>
          </HStack>
          <Formik
            initialValues={{
              nombre: '',
              email: '',
              mensaje: '',
            }}
            onSubmit={(values, { resetForm }) => {
              sendEmail();
              resetForm();
              //alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form ref={form} onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                      validate={value => {
                        let error;

                        if (value.length < 1) {
                          error = 'Email no puede estar vacio, campo requerido';
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.nombre && touched.nombre}>
                    <FormLabel htmlFor="nombre">Nombre</FormLabel>
                    <Field
                      as={Input}
                      id="nombre"
                      name="nombre"
                      variant="filled"
                      validate={value => {
                        let error;

                        if (value.length < 1) {
                          error =
                            'Nombre no puede estar vacio, campo requerido';
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.nombre}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.mensaje && touched.mensaje}>
                    <FormLabel htmlFor="mensaje">Mensaje</FormLabel>
                    <Field
                      as={Textarea}
                      id="mensaje"
                      name="mensaje"
                      variant="filled"
                      validate={value => {
                        let error;

                        if (value.length < 1) {
                          error =
                            'Mensaje no puede estar vacio, campo requerido';
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.mensaje}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="teal"
                    variant="outline"
                    width="full"
                  >
                    Contactar
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}
