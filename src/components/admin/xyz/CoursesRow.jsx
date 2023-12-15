import { Tr, Td, HStack, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBack2Line } from 'react-icons/ri'

const CoursesRow = ({ item, courseDetailHandler, deleteButtonHandler }) => {
    return (
        <Tr>
            <Td>{item._id}</Td>
            <Td>
                <Image src={item.poster.url} />
            </Td>
            <Td>{item.title}</Td>
            <Td>{item.category}</Td>
            <Td>{item.createdBy}</Td>
            <Td isNumeric>{item.views}</Td>
            <Td isNumeric>{item.numOfVideos}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => courseDetailHandler(item._id)} variant={'outline'} colorScheme='purple'>
                        View Lectures
                    </Button>
                    <Button onClick={() => deleteButtonHandler(item._id)} colorScheme='red'>
                        <RiDeleteBack2Line />
                    </Button>

                </HStack>
            </Td>
        </Tr>
    );
}
export default CoursesRow
