import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiArrowDownFill, RiArrowUpFill } from 'react-icons/ri'

const Databox = ({ title, qty, qtyPercentage, profit }) => {
    return (
        <Box w={['full', '20%']} p={'8'} borderRadius={'lg'} border={'1px'}>
            <Text children={title} />
            <HStack spacing={'6'}>
                <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
                <HStack>
                    <Text children={`${qtyPercentage}%`} />
                    {profit ? <RiArrowUpFill color='green' /> : <RiArrowDownFill color='red' />}
                </HStack>
            </HStack>
            <Text opacity={'0.6'} children={'Since last month'} />
        </Box>
    )
}

export default Databox
