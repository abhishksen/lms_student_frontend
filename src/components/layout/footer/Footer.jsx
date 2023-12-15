import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box
            padding={'4'}
            bg={'blackAlpha.200'}
            minH={'15vh'}
        >
            <Stack
                direction={['column', 'row']}
            >
                <VStack alignItems={['center', 'flex-start']} width={'full'}>
                    <Heading children="Tutorial Hell" size={'md'} color={'purple.500'} />
                    <Heading children="Copyright &#169; 2023 | All Rights Reserved" size={'sm'} />
                    <a style={{ color: ' #805AD5', fontFamily: 'body', fontWeight: '600' }} href="https://www.abhisheksen.in/" target="_blank" rel="noreferrer">Abhishek Sen</a>
                </VStack>
                <HStack spacing={['4', '10']} justifyContent={'center'} fontSize={'20'}>
                    <a href="https://www.linkedin.com/in/senabhishk" target='_blank' rel='noreferrer'>
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/abhishksen" target='_blank' rel='noreferrer'>
                        <FaGithub />
                    </a>
                    <a href="https://www.youtube.com/@senabhishk" target='_blank' rel='noreferrer'>
                        <FaYoutube />
                    </a>
                </HStack>
            </Stack>
        </Box>
    )
}

export default Footer
