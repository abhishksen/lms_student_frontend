import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Terms = ({ termsAndConditions }) => {
    return (
        <Box>
            <Heading size={'md'}
                children='Terms & Conditions applied'
                textAlign={['center', 'left']} my={'4'}
            />
            <Box h={'sm'} p={'4'} overflowY={'scroll'} marginY={'4'}>
                <Text fontFamily={'heading'} letterSpacing={'widest'} textAlign={['center', 'left']}>{termsAndConditions}</Text>
                <Heading my={'4'} size={'xs'} textAlign={['center', 'left']} children='Refund only applicable within 48hrs of purchase.' />
            </Box>
        </Box>
    )
}

export default Terms
