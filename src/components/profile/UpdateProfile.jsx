import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ user }) => {

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(updateProfile(name, email));
        dispatch(loadUser());
        navigate('/profile');
    }

    const { loading } = useSelector(state => state.profile)

    return (
        <Container py={'14'} minH={'100vh'}>
            <form onSubmit={submitHandler}>
                <Heading my={'10'} textTransform={'uppercase'} alignItems={'center'} children='Update your Profile' />
                <VStack spacing={'8'}>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Username'
                        type='text'
                        focusBorderColor="purple.400"
                    />
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='user@gmail.com'
                        type='email'
                        focusBorderColor="purple.400"
                    />
                    <Button isLoading={loading} w={'full'} colorScheme='purple' type='submit'>Update Profile</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default UpdateProfile
