import { Box, Container, Flex, Heading, Link, List, ListItem, Text, useDisclosure } from '@chakra-ui/react';
import { ScaleFade } from '@chakra-ui/transition';
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {

    return (
        <ScaleFade initialScale={0.9} in={true}>
            <Container maxW="container.md" borderRadius={"2rem"} border={10} borderColor={'black'} boxShadow={'lg'}>
                <Box p={5}>
                    <Heading fontSize="xl">Ayush Tickoo</Heading>
                    <Text mt={4}>
                        A MERN Stack developer with experience in REDIS, MySQL, Java Spring Boot. 
                        Holds a Bachelor's degree in Computer Science and Engineering.
                    </Text>
                    <List spacing={3} mt={4}>
                        <ListItem>
                            <Text fontWeight="bold">Education:</Text>
                            <Text>Bachelor's of Computer Science and Engineering</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontWeight="bold">Work Experience:</Text>
                            <Text>MERN Stack Developer, REDIS, MySQL, Java Spring Boot</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontWeight="bold">Certifications:</Text>
                            <Text>List your certifications here</Text>
                        </ListItem>
                    </List>
                    <Flex mt={4}>
                        <Link href="https://github.com/007tickooayush" isExternal mr={2}>
                            <FaGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ayush-tickoo-150704182/" isExternal>
                            <FaLinkedin />
                        </Link>
                    </Flex>
                </Box>
            </Container>
        </ScaleFade>
    )
}

export default About;