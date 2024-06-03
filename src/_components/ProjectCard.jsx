import { Box, Center, Collapse, Flex, Heading, Link, SimpleGrid, Tag, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'

const ProjectCard = ({ name, description, libsUsed }) => {
    const [show, setShow] = useState(false)

    const [github, setGithub] = useState('');
    useEffect(() => {
        import('../_assets/home.json')
            .then(res => setGithub(res.default.github))
            .catch(err => console.log(err));
    },[]);

    const handleToggle = () => setShow(!show)
    return (
        <Box borderWidth="2px" borderRadius="md" p={4} boxShadow="md" minHeight={"sm"}>
            <Flex direction="column" justifyContent="space-between" height="100%" alignContent={"stretch"}>
                <Box>
                    <Heading as="h3" size="md" mb={2}>
                        <Link href={`${github}/${name}`} isExternal>
                            {name}
                        </Link>
                    </Heading>
                </Box>
                <Box onClick={handleToggle}>
                    <Collapse startingHeight={50} in={show}>
                        <Text mb={4}>
                            {description} &nbsp;
                        </Text>
                    </Collapse>
                    {show ? <b>Show Less</b> : <b>Show More</b>}
                </Box>
                <Box >
                    <SimpleGrid columns={3} spacing={4}>
                        {
                            libsUsed.map((language, index) => (

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