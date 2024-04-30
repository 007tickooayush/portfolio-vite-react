import { Box, Container, Flex, Grid, GridItem, HStack, List, ListIcon, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdCheckCircle, MdCheckCircleOutline } from "react-icons/md";

const Home = () => {

    const [details, setDetails] = useState({});
    useEffect(() => {
        import('../_assets/home.json')
            .then(res => setDetails(res.default))
            .catch(err => console.log(err));
    }, []);

    return (
        <Container maxW='100%'>
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
                {/* <Text fontSize='xl'>(experience)</Text> */}
                <Box borderTop="1px solid gray" my={8} />
                <UnorderedList mt={10}>
                    {
                        details.experience && 
                        details.experience.map((exp, idx) => {

                            // console.log(exp.title);
                            return <ListItem key={idx}>
                                <Grid templateRows='repeat(4, lfr)' templateColumns='repeat(2, lfr)'>
                                    <GridItem colSpan={1}>
                                        <Text fontSize={'xl'}>
                                            {exp.title}
                                        </Text>
                                    </GridItem>
                                    <GridItem colSpan={1} display={'flex'} justifyContent={'end'}>
                                        <Text fontSize={'md'}>
                                            {exp.duration}
                                        </Text>
                                    </GridItem>
                                    <GridItem colSpan={2} rowSpan={1}>
                                        <Text fontSize={'md'}>
                                            {exp.company}
                                        </Text>
                                    </GridItem>
                                    <GridItem colSpan={2} rowSpan={1}>
                                        <List>
                                            {
                                                exp.deliverables && 
                                                exp.deliverables.map((desc, idx) => {
                                                    // console.log('desc :>> ', desc);
                                                    return <ListItem key={idx}>
                                                        <ListIcon as={MdCheckCircleOutline} color="green.500" />
                                                        {desc}
                                                    </ListItem>
                                                })
                                            }
                                        </List>
                                    </GridItem>
                                </Grid>
                                </ListItem>
                        })
                    }
                </UnorderedList>
            </Box>
        </Container>
    )
}

export default Home;