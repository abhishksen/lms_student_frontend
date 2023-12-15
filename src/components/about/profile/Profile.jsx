import React from 'react'
import { Avatar, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { FaGithub, FaGlobe, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import profileImg from '../../../assets/images/profile.jpg'

const Profile = () => {
    return (
        <Stack direction={['column', 'row']} spacing={['4', '6']} paddingY={'10'}>
            <VStack>
                <Avatar src={profileImg} boxSize={['20', '28']} />
                <Text children='Founder' opacity={'0.7'} />
            </VStack>
            <VStack alignItems={['center', 'flex-start']} spacing={'8'}>
                <VStack textAlign={['center', 'start']} alignItems={['center', 'flex-start']}>
                    <Heading children='Abhishek Sen' size={['sm', 'md']} />
                    <Text children='Hello there! This is Abhishek Sen a full-stack developer and a technical content creator.
                      Our mission is to provide quality content at reasonable prices.' />
                </VStack>
                <HStack spacing={['4', '10']} justifyContent={'center'} fontSize={'20'}>
                    <a href="https://www.abhisheksen.in" target='_blank' rel='noreferrer'>
                        <FaGlobe />
                    </a>
                    <a href="https://www.linkedin.com/in/senabhishk" target='_blank' rel='noreferrer'>
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/abhishksen" target='_blank' rel='noreferrer'>
                        <FaGithub />
                    </a>
                    <a href="https://www.youtube.com/@senabhishk" target='_blank' rel='noreferrer'>
                        <FaYoutube />
                    </a>
                    <a href="https://instagram.com/sen_abhishk" target='_blank' rel='noreferrer'>
                        <FaInstagram />
                    </a>

                </HStack>
            </VStack>
        </Stack>
    )
}

export default Profile
