import { Box, Container, Fade, Flex, HStack, SimpleGrid, SlideFade, Text, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Experience from "./Experience";

const Home = () => {

    const [details, setDetails] = useState({});
    useEffect(() => {
        // console.log(import.meta.env.VITE_COMPONENT_ENV);
        import('../_assets/home.json')
            .then(res => setDetails(res.default))
            .catch(err => console.log(err));
    }, []);

    return (
        <Container maxW='100%'>
            <Box padding={[2, 4]}>
                <Fade in={true} transition={{ enter: { duration: 0.6, delay: 0.2 }, exit: { duration: 0.4, delay: 0.1 } }}>
                    <Text fontSize={['3xl', '5xl']}>{details.name}</Text>
                </Fade>
                <SimpleGrid columns={[1, 2]} spacing={4} mt={8} mb={8} >
                    <SlideFade in={true} direction="top" transition={{ enter: { duration: 0.6, delay: 0.2 }, exit: { duration: 0.4, delay: 0.1 } }}>
                        <Box>
                            <Text fontSize='md'>{details.description}</Text>
                        </Box>
                    </SlideFade>

                    <SlideFade in={true} direction="bottom" transition={{ enter: { duration: 0.4, delay: 0.6 }, exit: { duration: 0.4, delay: 0.1 } }}>
                        <Box> {/* alignItems={'end'} */}
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
                    </SlideFade>
                </SimpleGrid>
                {/* <Text fontSize='xl'>(experience)</Text> */}
                <Box borderTop="1px solid gray" my={8} />
                <UnorderedList mt={10}>
                    {
                        details.experience &&
                        details.experience.map((exp, idx) => {
                            // console.log(exp.title);
                            return <Experience key={idx} exp={exp} />

                        })
                    }
                </UnorderedList>
            </Box>
        </Container>
    )
}

export default Home;