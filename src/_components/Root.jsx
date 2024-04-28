import { Box, Button, Flex, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import ColorMode from './ColorMode';

const Root = () => {

    return (
        <Box>
            <Flex p={4} shadow={'xl'} border="2rem" borderColor="black" justify="space-between" align="center" borderBottomRadius="2rem">
                <Flex justify={'space-between'} align={'center'}>
                    <Box mr={4}>
                        <Link to="/home">
                            Home
                        </Link>
                    </Box>
                    <Box mr={4}>
                        <Link to="/about">
                            About
                        </Link>
                    </Box>
                    <Box mr={4}>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </Box>
                    <Box mr={4}>
                        <Link to="/contact">Contact</Link>
                    </Box>
                </Flex >
                <Flex justify={'space-between'} align={'center'}>
                    <Box margin={4}>
                        <Text>Ayush Tickoo</Text>
                    </Box>
                    <ColorMode />
                </Flex>
            </Flex>
            <Outlet />
        </Box>
    )
}

export default Root;