import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, VStack, useDisclosure } from '@chakra-ui/react'
import { RiDashboardLine, RiLogoutBoxRLine, RiMenu3Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/actions/user'


const LinkButton = ({ url = '/', title = 'Home', onClose }) => {
    return (
        <Link to={url} onClick={onClose}>
            <Button variant={'ghost'}>{title}</Button>
        </Link>
    )
}

const Header = ({ isAuthenticated = false, user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const dispatch = useDispatch();

    const logoutHandler = () => {
        onClose();
        dispatch(logout());
    }

    return (
        <>
            <ColorModeSwitcher />

            <Button
                onClick={onOpen}
                colorScheme='purple' width={'12'} height={'12'} rounded={'md'} position={'fixed'} top='4' left='4' zIndex={'overlay'}>
                <RiMenu3Fill />
            </Button>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay backdropFilter={'blur(2px)'} />
                <DrawerContent>
                    <DrawerHeader borderBottom={'1px'}>TUTORIAL HELL</DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={'4'} alignItems={'flex-start'}>
                            <LinkButton onClose={onClose} url='/' title='Home' />
                            <LinkButton onClose={onClose} url='/courses' title='All Courses' />
                            <LinkButton onClose={onClose} url='/request' title='Request a Course' />
                            <LinkButton onClose={onClose} url='/about' title='About Us' />
                            <LinkButton onClose={onClose} url='/contact' title='Contact Us' />

                            <HStack
                                justifyContent={'space-evenly'}
                                position={'absolute'}
                                bottom={'2rem'}
                                width={'80%'}
                            >
                                {isAuthenticated ? (
                                    <>
                                        <VStack>
                                            <HStack>
                                                <Link onClick={onClose} to='/profile'>
                                                    <Button variant={'ghost'} colorScheme='purple'>Profile</Button>
                                                </Link>
                                                <Button variant={'ghost'} onClick={logoutHandler}>
                                                    Logout
                                                    <RiLogoutBoxRLine style={{
                                                        margin: '4px',
                                                    }} />
                                                </Button>
                                            </HStack>
                                            {
                                                user && user.role === 'admin' && <Link onClick={onClose} to='/admin/dashboard'>
                                                    <Button variant={'ghost'} colorScheme='purple'>
                                                        <RiDashboardLine style={{
                                                            margin: '4px',
                                                        }} />
                                                        Admin Dashboard
                                                    </Button>
                                                </Link>
                                            }
                                        </VStack>
                                    </>
                                ) : (
                                    <>
                                        <Link onClick={onClose} to='/login'>
                                            <Button colorScheme='purple'>Login</Button>
                                        </Link>
                                        <p>Or</p>
                                        <Link onClick={onClose} to='/register'>
                                            <Button colorScheme='purple'>Register</Button>
                                        </Link>
                                    </>
                                )}
                            </HStack>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header


