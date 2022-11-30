import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Avatar,
  Image,
  IconButton,
  useMediaQuery,
  Link,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import { MotionBox, MotionFlex } from './motion';
import ProjectCard from './project-card';
import { motion, AnimatePresence } from 'framer-motion';

function Proyects() {
  const [selectedId, setSelectedId] = useState(null);

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
      <Flex
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        pt={{ base: '6rem', md: '0' }}
      >
        <Box
          as="span"
          fontSize="6xl"
          fontWeight="bold"
          bgGradient="linear-gradient(to right, #fdc830, #f37335)"
          bgClip="text"
        >
          Projectos
        </Box>
      </Flex>
      <Container maxW={'5xl'} pt="1rem">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} w="100%">
          {projects.map(project => (
            <MotionBox whileHover={{ y: -5 }} key={project.id}>
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.desc}
                blurHash={project.blurHash}
                img={project.img}
                link={project.link}
                technologies={project.technologies}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </motion.div>
  );
}

const projects = [
  {
    id: 1,
    title: 'TriviApp',
    img: ['trivia1.jpg', 'trivia2.jpg', 'trivia3.jpg', 'trivia4.jpg'],
    link: 'https://github.com/',
    desc: `Trivia-App es un juego de trivia con enfoque educativo el cual cuenta con distintas 
    categorias con distintas preguntas de conocimiento general, la aplicación fue desarrollada 
    en Android Studio con Java como lenguaje de programación, el back-end del juego fue desarrollado en Laravel.`,
    technologies: ['Java', 'Laravel', 'MySql'],
  },
  {
    id: 2,
    title: 'CompuJobs',
    img: [
      'vacantes1.png',
      'vacantes2.png',
      'vacantes3.png',
      'vacantes4.png',
      'vacantes5.png',
      'vacantes6.png',
      'vacantes7.png',
      'vacantes8.png',
      'vacantes9.png',
      'vacantes10.png',
      'vacantes11.png',
      'vacantes12.png',
      'vacantes13.png',
      'vacantes14.png',
    ],
    link: 'https://github.com/robertoxd3/CompuJobs',
    desc: `Compujobs es una aplicación web donde profesionales de todas las áreas podrán colgar su perfil profesional para futuras contrataciones, a su vez las empresas podrán suscribirse para colocar sus ofertas laborales y buscar candidatos, Se puede seguir a los profesionales y empresas, además de generar reportes con librería DOMPDF y template de CV en documento docx, desarrollado bajo el modelo MVC con laravel 9, boostrap 5 y MySql, JS , Sistema Responsivo y amigable para los usuarios.`,
    technologies: ['Laravel', 'Boostrap', 'Blade'],
  },
  {
    id: 3,
    title: 'Sistema Bienes',
    img: [
      'bienes1.png',
      'bienes2.png',
      'bienes3.png',
      'bienes4.png',
      'bienes5.png',
      'bienes6.png',
      'bienes7.png',
      'bienes8.png',
      'bienes9.png',
      'bienes10.png',
      'bienes11.png',
      'bienes12.png',
      'bienes13.png',
      'bienes14.png',
    ],
    link: 'https://github.com/robertoxd3/SistemaBienes',
    desc: `Sistema Bienes es una aplicación web en la cual se administra los diferentes activos fijos con los que cuenta una entidad determinada, en este existen tres tipos de usuarios: Administrador, gerente, vendedor , cada uno con su respectiva funcionalidad, el sistema cuenta con Crud de Usuarios, Empleados, Activos, Traspasos , Historial de Accesos, Reportes con JasperReports, Vistas validada dependiendo el tipo de usuario y seguridad. Desarrollado con Java, Jsp, Servlets, Ajax, Jquery y MySql bajo el modelo MVC, Responsive.`,
    technologies: ['JSP', 'Java', 'Js', 'MySql'],
  },
  {
    id: 4,
    title: 'RecipePlus',
    link: 'https://github.com/robertoxd3/',
    img: [
      'Recipe1.png',
      'Recipe2.png',
      'Recipe3.png',
      'Recipe4.png',
      'Recipe5.png',
      'Recipe6.png',
      'Recipe7.png',
      'Recipe8.png',
    ],
    desc: `RecipePlus es un proyecto de responsabilidad social de referencia a los hábitos alimenticios de las 
    personas compartiendo recetas saludables para todas las etapas de la vida. Se realizó con la ayuda de bootstrap
    como Libreria CSS , además se hizo el desarrollo de una pequeña API para las recetas que mostradas las cuales 
    son retornadas en un JSON con NodeJS y se obtienen con JQuery.
    `,
    technologies: ['JS', 'Bootstrap', 'HTML5', 'NodeJs'],
  },
  {
    id: 5,
    title: 'Uso de PokeAPI',
    img: ['pokeapi1.png', 'pokeapi2.png', 'pokeapi3.png', 'pokeapi4.png'],
    link: 'https://github.com/robertoxd3/',
    desc: `En este proyecto se utilizo la API de https://pokeapi.co/ la cual fue obtenida con el uso de AJAX,Bootstrap como libreria css, Este proyecto fue realizado
    para un Examen Práctico de la Universidad.
    `,
    technologies: ['Bootstrap', 'JS', 'jQuery'],
  },
  {
    id: 6,
    title: 'Crud React-Firebase',
    img: [
      'firebase1.png',
      'firebase2.png',
      'firebase3.png',
      'firebase4.png',
      'firebase5.png',
      'firebase6.png',
      'firebase7.png',
      'firebase8.png',
      'firebase9.png',
    ],
    link: 'https://github.com/robertoxd3/',
    desc: `Aplicación desarrollada con React Native, Expo v45, Native-Base para los estilos y Firebase como gestor de base de datos, en este se puede apreciar las opciones de Crear,Editar,Eliminar y Ver, además cuenta con un Menu principal y validaciones con libreria Formik, compatible con web y android nativo.
    `,
    technologies: ['React-Native', 'Firebase'],
  },

];

export default Proyects;
