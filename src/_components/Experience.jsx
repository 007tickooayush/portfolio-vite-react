import React from 'react';
import { MdCheckCircle, MdCheckCircleOutline } from "react-icons/md";
import { Collapse, Grid, GridItem, List, ListIcon, ListItem, SlideFade, Text, useDisclosure } from "@chakra-ui/react";

const Experience = ({ exp }) => {
    const { isOpen, onToggle } = useDisclosure();

    return <SlideFade in={true} transition={{ enter: { duration: 0.6, delay: 0.2 }, exit: { duration: 0.4, delay: 0.2 } }}>
        <ListItem onClick={onToggle}>
            <Collapse in={isOpen} startingHeight={100} transition={{ enter: { duration: 1.0, delay: 0.2 }, exit: { duration: 0.4, delay: 0.1 } }}>
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
            </Collapse>
            {isOpen ? <b>Show Less</b> : <b>Show More</b>}
        </ListItem>
    </SlideFade>
}

export default Experience;