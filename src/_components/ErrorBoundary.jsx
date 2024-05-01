import { Container, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const ErrorBoundary = () => {
    return (
        <Container>
            <Flex direction="column" justifyContent="center" alignItems="center" height="90vh">
                <Text fontSize={'4xl'}>404</Text>
                <Text fontSize={'3xl'}>Page Not Found</Text>
                <Text>The requested page could not be found.</Text>
            </Flex>
        </Container>
    );
}

export default ErrorBoundary;