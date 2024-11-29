import { Container, Flex, Text } from '@chakra-ui/react';
import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        return (
            <Container>
                <Flex direction="column" justifyContent="center" alignItems="center" height="90vh">
                    <Text fontSize={'4xl'}>404</Text>
                    <Text fontSize={'3xl'}>Page Not Found</Text>
                    <Text>The requested page could not be found.</Text>
                </Flex>
            </Container>
        )
    }
}