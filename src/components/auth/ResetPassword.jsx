import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');

    const params = useParams();
    console.log(params.token);

    return (
        <Container py={'16'} h={'90vh'}>
            <form>
                <Heading children='Reset Password?' my={'16'} textAlign={['left']} />
                <VStack spacing={'8'}>
                    <Input
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your new password'
                        type='password'
                        focusBorderColor="purple.400"
                    />
                    <Button type='submit' w={'full'} colorScheme='purple'>Reset Password</Button>
                </VStack>
            </form>
        </Container>
    )
}

export default ResetPassword
