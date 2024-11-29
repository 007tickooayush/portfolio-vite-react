import { Box, Container, Flex, Heading, Link, List, ListItem, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import { ScaleFade } from '@chakra-ui/transition';
import React, { useEffect, useState } from 'react'
// import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {

    const [certifications, setCertifications] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [skillsBrief, setSkillsBrief] = useState([]);
    const [degree, setDegree] = useState({});

    useEffect(() => {
        import('../_assets/certifications.json').then(res => setCertifications(res.default));
        import('../_assets/home.json').then(res => {
            setName(res.default.name);
            setDescription(res.default.description);
            setSkillsBrief(res.default.skills_brief);
            setDegree(res.default.education);
        });
    }, []);
    return (
        <ScaleFade initialScale={0.9} in={true} transition={{ enter: { duration: 0.6, delay: 0.2 }, exit: { duration: 0.4, delay: 0.1 } }}>
            <Container maxW="container.md" borderRadius={"2rem"} border={10} borderColor={'black'} boxShadow={'lg'} mt={4}>
                <Box p={5}>
                    <Heading fontSize="xl">{name}</Heading>
                    <Text mt={4}>
                        {description}
                    </Text>
                    <List spacing={3} mt={4}>
                        <ListItem>
                            <Text fontWeight="bold">Education:</Text>
                            <Text>{degree.degree}: {degree.major}</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontWeight="bold">Experience:</Text>
                            <Text>{skillsBrief.join(", ")}</Text>
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