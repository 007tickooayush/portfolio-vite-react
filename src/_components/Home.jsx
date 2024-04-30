import { Box, Container, Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Home = () => {

    const [details, setDetails] = useState({});
    useEffect(() => {
        import('../_assets/home.json')
            .then(res => setDetails(res.default))
            .catch(err => console.log(err));
    }, []);

    return (
        <Box padding={[2, 4]}>
            <Text fontSize={['3xl', '5xl']}>{details.name}</Text>
            <SimpleGrid columns={[1, 2]} spacing={4} mt={8} mb={8} >
                <Box>
                    <Text fontSize='md'>{details.description}</Text>
                </Box>
                <Box alignItems={'end'}>
                    <HStack spacing={4} alignItems={'top'}>
                        <Box fontWeight={'bold'} fontSize='md' boxShadow='md' p={4} borderRadius='md' margin={2}>
                            Expert in:
                        </Box>

                        <Flex direction={'row'} justifyContent={'start'} alignItems={'top'} flexWrap={'wrap'}>
                            {
                                details.skills && details.skills.expert.map((skill, idx) => {
                                    return (
                                        <Box key={idx} fontSize='md' boxShadow='md' p={2} borderRadius='md' margin={2}>
                                            {skill}
                                        </Box>
                                    )
                                })
                            }
                        </Flex>

                    </HStack>

                    <HStack spacing={4} alignItems={'top'}>
                        <Box fontWeight={'bold'} fontSize='md' boxShadow='md' p={4} borderRadius='md' margin={2}>
                            Intermediate in:
                        </Box>
                        <Flex direction={'row'} justifyContent={'start'} alignItems={'top'} flexWrap={'wrap'}>
                            {
                                details.skills && details.skills.intermediate.map((skill, idx) => {
                                    return (
                                        <Box key={idx} fontSize='md' boxShadow='md' p={2} borderRadius='md' margin={2}>
                                            {skill}
                                        </Box>
                                    )
                                })
                            }
                        </Flex>

                    </HStack>
                    <HStack spacing={4} alignItems={'top'}>
                        <Box fontWeight={'bold'} fontSize='md' boxShadow='md' p={4} borderRadius='md' margin={2}>
                            Basic in:
                        </Box>
                        <Flex direction={'row'} justifyContent={'start'} alignItems={'top'} flexWrap={'wrap'}>
                            {
                                details.skills && details.skills.basic.map((skill, idx) => {
                                    return <Box key={idx} fontSize='md' boxShadow='md' p={2} borderRadius='md' margin={2}>
                                        {skill}
                                    </Box>
                                })
                            }
                        </Flex>

                    </HStack>
                </Box>
            </SimpleGrid>
            <Text fontSize='xl'>Ayush Tickoo (experience)</Text>

            <Text fontSize='3xl'>Ayush Tickoo (desc)</Text>
            <Text fontSize='3xl'>Ayush Tickoo (experience detailed)</Text>
            <Text fontSize='3xl'>Ayush Tickoo (skills detailed)</Text>
        </Box>

    )
}

export default Home;