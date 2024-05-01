import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button borderBottomRightRadius="2rem" onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun /> }</Button>
    )
}

export default ColorMode;