import { Box, Container, Grid, GridItem, HStack, Link, ScaleFade, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Contact = () => {

    const [contact, setContact] = useState({});
    useEffect(() => {
        import('../_assets/home.json').then(res => {
            console.log({ email: res.default.email, linkedin: res.default.linkedin, github: res.default.github, medium: res.default.medium });
            setContact({ email: res.default.email, linkedin: res.default.linkedin, github: res.default.github, medium: res.default.medium });
        }).catch(err => console.log(err));
    }, []);

    const handleEmailClick = () => {
        window.open(`mailto:${contact.email}`);
    };

    return (
        <Container maxW="container.md" borderRadius={"2rem"} border={10} borderColor={'black'} boxShadow={'lg'} mt={4} p={10}>
            <Text fontSize="3xl">Contact Me:</Text>
            <Grid templateColumns="repeat(4, 1fr)" templateRows="repeat(4, 1fr)" gap={2} mt={4}>
                <GridItem colSpan={1} rowSpan={1}>
                    <HStack>
                        <FaLinkedin />
                        <Text fontSize="xl">LinkedIn:</Text>
                    </HStack>
                </GridItem>

                <GridItem colSpan={3} rowSpan={1}>
                    <ScaleFade initialScale={0.9} in={true} transition={{ enter: { duration: 0.6, delay: 0.2 }, exit: { duration: 0.4, delay: 0.1 } }}>
                        <Text fontSize="md">
                            <Link href={contact.linkedin} isExternal>
                                {contact.linkedin}
                            </Link>
                        </Text>
                    </ScaleFade>
                </GridItem>

                <GridItem colSpan={1} rowSpan={1}>
                    <HStack>
                        <FaGithub />
                        <Text fontSize="xl">Github:</Text>
                    </HStack>
                </GridItem>
                <GridItem colSpan={3} rowSpan={1}>
                    <ScaleFade initialScale={0.9} in={true} transition={{ enter: { duration: 0.6, delay: 0.2 }, exit: { duration: 0.4, delay: 0.1 } }}>
                        <Text fontSize="md">
                            <Link href={contact.github} isExternal>
                                {contact.github}
                            </Link>
                        </Text>
                    </ScaleFade>
                </GridItem>

                <GridItem colSpan={1} rowSpan={1}>
                    <HStack>
                        <FaMedium />
                        <Text fontSize="xl">Medium:</Text>
                    </HStack>
                </GridItem>
                <GridItem colSpan={3} rowSpan={1}>
                    <ScaleFade initialScale={0.9} in={true} transition={{ enter: { duration: 0.6, delay: 0.2 }, exit: { duration: 0.4, delay: 0.1 } }}>
                        <Text fontSize="md">
                            <Link href={contact.medium} isExternal>
                                {contact.medium}
                            </Link>
                        </Text>
                    </ScaleFade>
                </GridItem>

                <GridItem colSpan={1} rowSpan={1}>
                    <HStack>
                        <FaEnvelope />
                        <Text fontSize="xl">E-Mail:</Text>
                    </HStack>
                </GridItem>
                <GridItem colSpan={3} rowSpan={1}>
                    <ScaleFade initialScale={0.9} in={true} transition={{ enter: { duration: 0.6, delay: 0.2 }, exit: { duration: 0.4, delay: 0.1 } }}>
                        <Text fontSize="md" onClick={handleEmailClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                            {contact.email}
                        </Text>
                    </ScaleFade>
                </GridItem>

            </Grid>
        </Container>
    )
}

export default Contact;