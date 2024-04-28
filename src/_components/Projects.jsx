import { Box, Card, Center, Container, SimpleGrid, SlideFade, VStack } from '@chakra-ui/react';
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
            <Container p={8} shadow={'xl'} borderRadius={'2rem'} minW='xl'>
                <Box >
                    <SimpleGrid columns={2} spacing={10}>
                        {/* <Box>
                            
                            <ProjectCard name="Project 1" description="Description 1" languagesUsed={["Language 1", "Language 2"]}/>
                            <Center>
                                column1
                            </Center>
                        </Box> */}
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

                </Box>
            </Container>
        </SlideFade>
    )
}

export default Projects