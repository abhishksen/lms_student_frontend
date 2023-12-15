import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/actions/user';

export const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    height: '100%',
    border: 'none',
    color: '#805AD5',
    background: 'transparent',
}

const fileUploadStyle = {
    '&::file-selector-button': fileUploadCss,
}

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagePrev, setImagePrev] = useState();
    const [image, setImage] = useState();

    const dispatch = useDispatch();

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('name', name);
        myForm.append('email', email);
        myForm.append('password', password);
        myForm.append('file', image);

        dispatch(register(myForm));

    }

    return (
        <Container minH={'100vh'} my={'10'}>
            <VStack h={'full'} paddingX={['2', '0']} alignItems={['flex-start', 'center']} justifyContent={'flex-start'} spacing={'16'}>
                <Heading textAlign={['left']} marginTop={['2rem', '0.5']} children='Register to Tutorial Hell' />
                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <Box marginY={'4'} display={'flex'} justifyContent={'center'}>
                        <Avatar src={imagePrev} size={'2xl'} />
                    </Box>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor='name' children='Name' />
                        <Input
                            required
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Username'
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
                    <Box marginY={'4'}>
                        <FormLabel htmlFor='chooseAvatar' children='Choose Avatar' />
                        <Input
                            accept='image/*'
                            required
                            id='chooseAvatar'
                            type='file'
                            focusBorderColor="purple.400"
                            css={fileUploadStyle}
                            onChange={changeImageHandler}
                        />
                    </Box>

                    <Button type='submit' my={'4'} colorScheme='purple'>Register</Button>
                    <Box my={'4'}>
                        Already have an account?{' '}<Link to={'/login'}><Button colorScheme='purple' variant={'link'} >Login</Button></Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Register
