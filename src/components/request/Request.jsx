import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Request = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    return (
        <Container h={'100vh'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'14'} paddingX={'2'}>
                <Heading children='Request a new course' />
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
                        <FormLabel htmlFor='course' children='Course' />
                        <Textarea
                            required
                            id='course'
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                            placeholder='Type your course details...'
                            focusBorderColor="purple.400"
                        />
                    </Box>
                    <Button my={'4'} colorScheme='purple'>Send</Button>
                    <Box my={'4'}>
                        See available course?{' '}<Link to={'/courses'}><Button colorScheme='purple' variant={'link'} >Click Here</Button></Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Request
