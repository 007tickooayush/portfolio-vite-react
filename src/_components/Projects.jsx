import { Box, Card, Center, Container, Flex, SimpleGrid, SlideFade, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';
import projectsList from "../_assets/projects.json";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsList);
    },[]);

    return (
        <SlideFade in={true} offsetY="20px">
            <Container p={8} shadow={'xl'} borderRadius={'2rem'} maxW={'container.lg'}>
                <Box >
                    <Flex flexWrap={'wrap'}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <Box key={index} >
                                            <ProjectCard name={project.name} description={project.description} languagesUsed={project.languagesUsed} />
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