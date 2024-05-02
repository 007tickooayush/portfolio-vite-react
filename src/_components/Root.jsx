import { Box, Button, Flex, Tab, TabList, Tabs, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import ColorMode from './ColorMode';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// import Home from './Home';
// import About from './About';
// import Projects from './Projects';
// import Contact from './Contact';
// import ErrorBoundary from './ErrorBoundary';

const Root = () => {

    return (
        // <Box display="flex" flexDirection={{ base: "column", md: "row" }} flexWrap="wrap" minHeight="100vh" minWidth={'100vw'}></Box>
        <Box display="flex" flexDirection={"column"} minHeight="100vh" minWidth={'100vw'}>
            <Flex
                p={4}
                shadow="xl"
                border="2rem"
                borderColor="black"
                justify="space-between"
                align="center"
                borderBottomRadius="2rem"
                direction={{ base: "column", md: "row" }}
            >
                <Flex justify="space-between" align="center" mb={[4, 0]} flexDirection={['column', 'row']} >
                    <Tabs variant="soft-rounded" colorScheme="gray" display='flex' flexDirection={['column', 'row']}>
                        <Tab mr={4}>
                            <Link to="/">Home</Link>
                        </Tab>
                        <Tab mr={4}>
                            <Link to="/about">About</Link>
                        </Tab>
                        <Tab mr={4}>
                            <Link to="/projects">Projects</Link>
                        </Tab>
                        <Tab mr={4}>
                            <Link to="/contact">Contact</Link>
                        </Tab>
                    </Tabs>
                </Flex>
                <Flex justify="space-between" align="center" >
                    {/* flexDirection={['column', 'row']} */}
                    <Box margin={2}>
                        <Text>Ayush Tickoo</Text>
                    </Box>
                    <Box margin={2}>
                        <a href="https://github.com/007tickooayush">
                            <FaGithub />
                        </a>
                    </Box>
                    <Box margin={2}>
                        <a href="https://www.linkedin.com/in/ayush-tickoo-150704182/">
                            <FaLinkedin />
                        </a>
                    </Box>
                    <ColorMode />
                </Flex>
            </Flex>
            <Outlet />
        </Box>
    );
}

export default Root;