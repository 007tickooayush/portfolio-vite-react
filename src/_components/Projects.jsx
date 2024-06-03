import { Box, Card, Center, Container, Flex, SimpleGrid, SlideFade, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        import("../_assets/projects.json").then(res => setProjects(res.default)).catch(err => console.log(err));
        // setProjects(projectsList);
    }, []);

    return (
        <SlideFade in={true} offsetY="20px" transition={{ enter: { duration: 0.5, delay: 0.3 }, exit: { duration: 0.2, delay: 0.5 } }} >
            <Container p={8} shadow={'xl'} borderRadius={'2rem'} maxW={'container.lg'}>
                <Box >
                    <Flex flexWrap={'wrap'}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <Box key={index} >
                                            <ProjectCard name={project.name} description={project.description} libsUsed={project.libsUsed} />
                                        </Box>
                                    )
                                })
                            }
                        </SimpleGrid>
                    </Flex>
                </Box>
            </Container>
        </SlideFade>
    )
}

export default Projects