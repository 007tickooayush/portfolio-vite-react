import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import homeDetails from '../_assets/home.json';

const Home = () => {

    const [details, setDetails] = useState({});
    useEffect(() => {
        setDetails(homeDetails);
    }, []);

    return (
        <Container maxW="container.xl" margin={4}>
            <Text fontSize='5xl'>{details.name}</Text>
            <SimpleGrid columns={2} spacing={20} mt={8} mb={8}>
                <Box>
                    <Text fontSize='md'>{details.description}</Text>
                    <Text fontSize='md'>some description</Text>
                </Box>
                <Box alignItems={'end'}>
                    <Text fontSize='2xl'>(skills)</Text>
                    <Text fontSize='xl'>Ayush Tickoo (experience)</Text>
                </Box>
            </SimpleGrid>

            <Text fontSize='3xl'>Ayush Tickoo (desc)</Text>
            <Text fontSize='3xl'>Ayush Tickoo (experience detailed)</Text>
            <Text fontSize='3xl'>Ayush Tickoo (skills detailed)</Text>
        </Container>
    )
}

export default Home;