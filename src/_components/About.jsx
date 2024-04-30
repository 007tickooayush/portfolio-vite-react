import { Box, Container, Flex, Heading, Link, List, ListItem, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import { ScaleFade } from '@chakra-ui/transition';
import React, { useEffect, useState } from 'react'
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {

    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        import('../_assets/certifications.json').then(res => setCertifications(res.default));
    }, []);
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
                            <List spacing={1}>
                                {
                                    certifications.map((certification, index) => (
                                        <ListItem key={index}>
                                            <Box borderBottomWidth={1} p={2} mb={2}>
                                                <SimpleGrid columns={2} spacing={2}>
                                                    <Text>{certification.title}</Text>
                                                    <Text>{certification.year}</Text>
                                                    <Text>{certification.provider}</Text>
                                                </SimpleGrid>
                                                <Text>{certification.credentials}</Text>
                                            </Box>
                                        </ListItem>
                                    ))
                                }
                            </List>

                        </ListItem>
                    </List>
                </Box>
            </Container>
        </ScaleFade>
    )
}

export default About;