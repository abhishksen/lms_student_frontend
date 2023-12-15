import { Avatar, Button, Container, HStack, Heading, Image, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ChangePhotoModal from './ChangePhotoModal'
import { updateProfilePicture } from '../../redux/actions/profile'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../redux/actions/user'
import { toast } from 'react-hot-toast'

const Profile = ({ user }) => {



    const dispatch = useDispatch();

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

    const removeFromPlayListHandler = (id) => {
        console.log(id)
    }

    const changeImageSubmitHandler = async (e, image) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.append('file', image);

        await dispatch(updateProfilePicture(myForm));
        dispatch(loadUser())
    }

    const { isOpen, onClose, onOpen } = useDisclosure();


    return (
        <Container minH={'100vh'} maxW={'container.lg'} py={'8'}>
            <Heading children='Profile' m='8' textTransform={'uppercase'} />

            <Stack
                justifyContent={'flex-start'}
                direction={['column', 'row']}
                alignItems={'center'}
                spacing={['6', '12']}
                padding={'8'}
            >
                <VStack>
                    <Avatar boxSize={'40'} src={user.avatar.url} />
                    <Button onClick={onOpen} colorScheme='purple' variant={'ghost'}>Change Avatar</Button>
                </VStack>
                <VStack spacing={'4'}
                    alignItems={['flex-start']}
                >
                    <HStack>
                        <Text children='Name:' fontWeight={'bold'} />
                        <Text children={user.name} />
                    </HStack>
                    <HStack>
                        <Text children='Email:' fontWeight={'bold'} />
                        <Text children={user.email} />
                    </HStack>
                    <HStack>
                        <Text children='Last Updated:' fontWeight={'bold'} />
                        <Text children={user.createdAt.split('T')[0]} />
                    </HStack>
                    {
                        user.role !== 'admin' && (
                            <HStack>
                                <Text children='Subscription:' fontWeight={'bold'} />
                                {
                                    user.subscription && user.subscription.status === 'active' ? (
                                        <Button color='purple.400' variant={'unstyled'}>Cancel Subscription</Button>) : (
                                        <Link to={'/subscribe'}>
                                            <Button colorScheme='purple' variant={'ghost'}>Subscribe</Button>
                                        </Link>
                                    )
                                }
                            </HStack>
                        )}

                    <Stack
                        direction={['column', 'row']}
                        // alignItems={'center'}
                        justifyContent={'flex-start'}
                    >
                        <Link to={'/updateprofile'}>
                            <Button colorScheme='purple' variant={'outline'}>Update Profile</Button>
                        </Link>
                        <Link to={'/changepassword'}>
                            <Button colorScheme='purple' variant={'solid'}>Change Password</Button>
                        </Link>
                    </Stack>

                </VStack>

            </Stack>

            <Heading py={'4'} borderBottom={'1px'} textAlign={['center', 'left']} fontSize={'md'} children='Playlist' />
            {
                user.playlist.length > 0 && (
                    <Stack
                        direction={['column', 'row']}
                        alignItems={'center'}
                        flexWrap={'wrap'}
                        p={'4'}
                    >
                        {
                            user.playlist.map((element, index) => (
                                <VStack spacing={'4'} w={'48'} m={'2'} key={element.course}>
                                    <Image
                                        borderRadius={'md'}
                                        boxSize={'full'}
                                        objectFit={'contain'}
                                        src={element.poster}
                                        h={'28'}
                                    />
                                    <HStack spacing={'7'}>
                                        <Link to={`/course/${element.course}`}>
                                            <Button variant={'outline'} colorScheme='purple'>Watch Now</Button>
                                        </Link>
                                        <Button onClick={() => (removeFromPlayListHandler(element.course))} colorScheme='purple' variant={'solid'}>
                                            <RiDeleteBin7Fill />
                                        </Button>
                                    </HStack>
                                </VStack>
                            ))
                        }
                    </Stack>
                )
            }

            <ChangePhotoModal isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} loading={loading} />

        </Container>
    )
}

export default Profile
