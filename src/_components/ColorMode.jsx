import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react'

const ColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button borderBottomRightRadius="2rem" onClick={toggleColorMode}>Toggle {colorMode === "light" ? "dark" : "light"}</Button>
    )
}

export default ColorMode;