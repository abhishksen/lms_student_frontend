import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
        <Container h={'100vh'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'14'} paddingX={'2'}>
                <Heading children='Contact Us' />
                <form style={{ width: '100%' }}>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor='name' children='Name' />
                        <Input
                            required
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter your name'
                            type='text'
                            focusBorderColor="purple.400"
                        />
                    </Box>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor='email' children='Email' />
                        <Input
                            required
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='user@gmail.com'
                            type='email'
                            focusBorderColor="purple.400"
                        />
                    </Box>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor='message' children='Message' />
                        <Textarea
                            required
                            id='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Type your message...'
                            focusBorderColor="purple.400"
                        />
                    </Box>
                    <Button my={'4'} colorScheme='purple'>Send</Button>
                    <Box my={'4'}>
                        Request a new course?{' '}<Link to={'/request'}><Button colorScheme='purple' variant={'link'} >Click Here</Button></Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Contact
