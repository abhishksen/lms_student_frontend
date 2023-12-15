import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    return (
        <Container h={'95vh'}>
            <VStack h={'full'} paddingX={['2', '0']} justifyContent={'center'} spacing={'16'}>
                <Heading children='Welcome to Tutorial Hell' />
                <form onSubmit={submitHandler} style={{ width: '100%' }}>
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
                        <FormLabel htmlFor='password' children='Password' />
                        <Input
                            required
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='********'
                            type='password'
                            focusBorderColor="purple.400"
                        />
                    </Box>
                    <Box>
                        <Link to={'/forgetpassword'}><Button variant={'link'} fontSize={'sm'}>Forget Password?</Button></Link>
                    </Box>
                    <Button type='submit' my={'4'} colorScheme='purple'>Login</Button>
                    <Box my={'4'}>
                        Don't have an account?{' '}<Link to={'/register'}><Button colorScheme='purple' variant={'link'} >Register</Button></Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Login
