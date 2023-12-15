import { Avatar, Button, Container, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { fileUploadCss } from '../auth/Register'

const ChangePhotoModal = ({ isOpen, onClose, changeImageSubmitHandler, loading }) => {

    const [imagePrev, setimagePrev] = useState('');
    const [image, setimage] = useState('');

    const changeImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setimagePrev(reader.result);
            setimage(file);
        }
    }

    const closeHandler = () => {
        onClose();
        setimagePrev('');
        setimage('');
    }

    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={'blur(5px)'} />
            <ModalContent p={'4'}>
                <ModalCloseButton m={'6'} />
                <ModalHeader>
                    Change Your Avatar
                </ModalHeader>
                <ModalBody>
                    <Container>
                        <form onSubmit={(e) => changeImageSubmitHandler(e, image)}>
                            <VStack spacing={'8'}>
                                {imagePrev && <Avatar src={imagePrev} boxSize={'40'} />}
                                <Input
                                    type='file'
                                    css={{ '&::file-selector-button': fileUploadCss }}
                                    onChange={changeImage}
                                />
                                <Button isLoading={loading} w={'full'} colorScheme='purple' type='submit'>Change</Button>
                            </VStack>
                        </form>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={closeHandler} mr={'3'}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ChangePhotoModal
