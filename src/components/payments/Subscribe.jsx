import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
  return (
    <Container h={'100vh'} p={'12'}>
      <Heading children='Choose our plans' my={'8'} textAlign={'center'} />
      <VStack
        // spacing={'4'}
        alignItems={'stretch'}
        css={{
          borderRadius: '10px'
        }}
        boxShadow={'md'}
      >
        <Box bg={'purple.500'} p={'4'} css={{
          borderRadius: '10px 10px 0 0'
        }} >
          <Text color={'whiteAlpha.800'} fontWeight={'bold'} children='Pro Pack - $5.00' />
        </Box>
        <Box p={'4'} textAlign={'center'} justifyContent={'center'} alignItems={'center'}>
          <VStack spacing={'4'} >
            <Text children='Subscribe to our pro pack to get access to all premium courses available.' />
            <Heading children='$5.00 only' size={'md'} textAlign={'center'} />
          </VStack>
          <Button my={'8'} colorScheme='purple'>Subscribe</Button>
        </Box>
        <Box bg={'blackAlpha.200'} p={'4'} css={{
          borderRadius: '0 0 10px 10px'
        }}>
          <Heading textAlign={'center'} textTransform={'uppercase'} fontSize={'sm'} children='100% Refund policy on cancelation.' />
        <Text py={'2'} textAlign={'center'} fontSize={'xs'} children='*Terms & Conditions applied.' />
        </Box>
      </VStack>
    </Container>
  )
}

export default Subscribe
