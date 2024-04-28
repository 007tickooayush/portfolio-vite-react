import { Box, Card, Center, Container, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react'

const Home = () => {
    return (
        <Container p={8} shadow={'xl'} borderRadius={'2rem'}>
            <Box>
                <SimpleGrid columns={2} spacing={10}>
                    <Box>
                        <Card>
                            {/* project card */}
                        </Card>
                        <Center>
                            column1
                        </Center>
                    </Box>
                    <Box>
                        <Center>
                            column2
                        </Center>
                    </Box>

                    <Box>
                        <Center>
                            column1
                        </Center>
                    </Box>
                    <Box>
                        <Center>
                            column2
                        </Center>
                    </Box>
                    <Box>
                        <Center>
                            column1
                        </Center>
                    </Box>
                    <Box>
                        <Center>
                            column2
                        </Center>
                    </Box>
                </SimpleGrid>
                
            </Box>
        </Container>
    )
}

export default Home;