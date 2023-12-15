import { Tr, Td, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBack2Line } from 'react-icons/ri'

const Row = ({ item, updateHandler, deleteButtonHandler }) => {
    return (
        <Tr>
            <Td>{item._id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.email}</Td>
            <Td>{item.role}</Td>
            <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
            <Td isNumeric>
                <HStack justifyContent={'flex-end'}>
                    <Button onClick={() => updateHandler(item._id)} variant={'outline'} colorScheme='purple'>
                        Change Role
                    </Button>
                    <Button onClick={() => deleteButtonHandler(item._id)} colorScheme='red'>
                        <RiDeleteBack2Line />
                    </Button>

                </HStack>
            </Td>
        </Tr>
    );
}
export default Row
