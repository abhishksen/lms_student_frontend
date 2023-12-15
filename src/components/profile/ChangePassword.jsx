import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(changePassword(oldPassword, newPassword));
    }

    const { loading, message, error } = useSelector(state => state.profile)

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' })
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' })
        }
    }, [dispatch, error, message])

    return (
        <Container py={'14'} minH={'100vh'}>
            <form onSubmit={submitHandler}>
                <Heading my={'10'} textTransform={'uppercase'} alignItems={'center'} children='Change Password' />
                <VStack spacing={'8'}>
                    <Input
                        required
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        placeholder='Enter old Password'
                        type='password'
                        focusBorderColor="purple.400"
                    />
                    <Input
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder='Enter new Password'
                        type='password'
                        focusBorderColor="purple.400"
                    />
                    <Button isLoading={loading} w={'full'} colorScheme='purple' type='submit'>Change Password</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ChangePassword
