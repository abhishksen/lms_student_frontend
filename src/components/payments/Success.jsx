import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <Container p={'12'} h={'100vh'}>
            <Heading children='Subscribed Successfully!' />
            <VStack alignItems={'center'} py={'8'}>
                <Box w={'full'} bg={'purple.500'} p={'4'} css={{borderRadius:'10px 10px 0 0'}}>
                    <Text children='Payment Success.' color={'white'} fontWeight={'bold'}/>
                </Box>
                <Box p={'4'}>
                    <VStack textAlign={'center'} spacing={'4'}>
                        <Text>
                            Congratulations you're a pro memeber now.
                            Access to all premium courses availbele.
                            Stay tuned for upcoming courses too.
                        </Text>
                        <Heading size={'4xl'}>
                            <RiCheckboxCircleFill color='green' />
                        </Heading>
                    </VStack>
                </Box>
                <Link to={'/profile'}>
                    <Button variant={'ghost'}>Go to profile</Button>
                </Link>
                <Heading size={'xs'}>
                    Refecence: djejdled0o4oo 4fjo4jf4jf
                </Heading>
            </VStack>
        </Container>
    )
}

export default Success
