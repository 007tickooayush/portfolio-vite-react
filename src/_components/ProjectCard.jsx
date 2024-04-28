import { Box, Center, Collapse, Flex, Heading, SimpleGrid, Tag, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const ProjectCard = ({ name, description, languagesUsed }) => {
    const [show, setShow] = useState(false)

    const handleToggle = () => setShow(!show)
    return (
        <Box borderWidth="2px" borderRadius="md" p={4} boxShadow="md" minHeight={"sm"}>
            <Flex direction="column" justifyContent="space-between" height="100%" alignContent={"stretch"}>
                <Box>
                    <Heading as="h3" size="md" mb={2}>
                        {name}
                    </Heading>
                </Box>
                <Box onClick={handleToggle}>
                    <Collapse startingHeight={75} in={show}>
                        <Text mb={4}>
                            {description} &nbsp;
                        </Text>
                    </Collapse>
                    {show ? <b>Show Less</b> : <b>Show More</b>}
                </Box>
                <Box >
                    <SimpleGrid columns={3} spacing={4}>
                        {
                            languagesUsed.map((language, index) => (

                                <Tag
                                    key={index}
                                    variant="subtle"
                                    colorScheme="blue"
                                    fontSize="xs"
                                    minWidth={"70px"}
                                    justifyContent={"center"}
                                >
                                    {language}
                                </Tag>
                            ))
                        }
                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    );
}
export default ProjectCard;