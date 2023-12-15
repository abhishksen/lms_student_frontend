import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} h={'90vh'}>
      <form>
        <Heading children='Forget Password?' my={'16'} textAlign={['left']} />
        <VStack spacing={'8'}>
          <Input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='user@gmail.com'
            type='email'
            focusBorderColor="purple.400"
          />
          <Button type='submit' w={'full'} colorScheme='purple'>Send Login Link</Button>
        </VStack>
      </form>
    </Container>
  )
}

export default ForgetPassword
