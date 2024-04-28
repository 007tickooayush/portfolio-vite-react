import { Box, Button, Flex, Tab, TabList, Tabs, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import ColorMode from './ColorMode';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Root = () => {

    return (
        <Box>
            <Flex p={4} shadow={'xl'} border="2rem" borderColor="black" justify="space-between" align="center" borderBottomRadius="2rem">
                <Flex justify={'space-between'} align={'center'}>
                    <Tabs variant='soft-rounded' colorScheme='gray'>
                        <TabList>
                            <Tab mr={4}>
                                <Link to="/home">
                                    Home
                                </Link>
                            </Tab>
                            <Tab mr={4}>
                                <Link to="/about">
                                    About
                                </Link>
                            </Tab>
                            <Tab mr={4}>
                                <Link to="/projects">
                                    Projects
                                </Link>
                            </Tab>
                            <Tab mr={4}>
                                <Link to="/contact">Contact</Link>
                            </Tab>
                        </TabList>
                    </Tabs>
                </Flex >
                <Flex justify={'space-between'} align={'center'}>
                    <Box margin={2}>
                        <Text>Ayush Tickoo</Text>
                    </Box>
                    <Box margin={2}>
                        <Link href="https://github.com/007tickooayush" >
                            <FaGithub />
                        </Link>
                    </Box>
                    <Box margin={2}>
                        <Link href="https://www.linkedin.com/in/ayush-tickoo-150704182/" >
                            <FaLinkedin />
                        </Link>
                    </Box>

                    <ColorMode />
                </Flex>
            </Flex>
            <Outlet />
        </Box>
    )
}

export default Root;