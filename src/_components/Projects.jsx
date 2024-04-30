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
            <Container p={8} shadow={'xl'} borderRadius={'2rem'} >
                <Box >
                    <Flex flexWrap={'wrap'}>
                        {
                            projects.map((project, index) => {
                                return (
                                    <Box key={index} >
                                        <ProjectCard name={project.name} description={project.description} languagesUsed={project.languagesUsed} />
                                    </Box>
                                )
                            })
                        }
                    </Flex>

                </Box>
            </Container>
        </SlideFade>
    )
}

export default Projects