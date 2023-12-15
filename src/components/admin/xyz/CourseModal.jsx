import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import VideoCard from './VideoCard';
import { fileUploadCss } from '../../auth/Register';

const CourseModal = ({ isOpen, onClose, id, deleteButtonHandler, courseTitle, lectures = [1, 2, 3, 4, 5, 6, 7, 8], addLectureHandler }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [videoPrev, setVideoPrev] = useState('');

    const changeVideoHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setVideoPrev(reader.result);
            setVideo(file);
        }
    }

    const onCloseHandler = () => {
        setTitle('');
        setDescription('');
        setVideo('');
        setVideoPrev('');
        onClose();
    }

    return (
        <Modal isOpen={isOpen} size={'full'} onClose={onCloseHandler} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{courseTitle}</ModalHeader>
                <ModalCloseButton />

                <ModalBody p={'10'}>
                    <Grid templateColumns={['1fr', '2fr 1fr']}>
                        <Box px={['0', '10']}>
                            <Box my={'4'}>
                                <Heading children={courseTitle} size={'lg'} />
                                <Heading children={`#${id}`} size={'sm'} opacity={'0.5'} />
                            </Box>
                            <Heading children='Lectures' size={'md'} />

                            {/* <VideoCard
                                title="react video"
                                description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                                num={1}
                                lectureId={'nkwjdsiedemxlek'}
                                courseId={id}
                                deleteButtonHandler={deleteButtonHandler}
                            /> */}

                            {
                                lectures.map((item, i) => (
                                    <VideoCard
                                        key={i}
                                        title="react video"
                                        description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                                        num={i + 1}
                                        lectureId={'nkwjdsiedemxlek'}
                                        courseId={id}
                                        deleteButtonHandler={deleteButtonHandler}
                                    />
                                ))
                            }

                        </Box>

                        <Box>
                            <form onSubmit={e => addLectureHandler(e, id, title, description, video)}>
                                <VStack spacing={'4'}>
                                    <Heading children={'Add Lecture'} size={'md'} />
                                    <Input
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        placeholder='Lecture Title'
                                        type='text'
                                        focusBorderColor="purple.400"
                                    />
                                    <Input
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder='Lecture Description'
                                        type='text'
                                        focusBorderColor="purple.400"
                                    />
                                    <Input
                                        accept='video/mp4'
                                        required
                                        type='file'
                                        focusBorderColor="purple.400"
                                        css={{
                                            '&::file-selector-button': {
                                                ...fileUploadCss, color: 'purple.400'
                                            },
                                        }}
                                        onChange={changeVideoHandler}
                                    />
                                    {
                                        videoPrev && (
                                            <video src={videoPrev} controlsList='nodownload' controls></video>
                                        )
                                    }
                                    <Button w={'full'} colorScheme='purple' type='submit'>Add Lecture</Button>
                                </VStack>
                            </form>
                        </Box>

                    </Grid>

                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="purple" variant={'outline'} mr={3} onClick={onCloseHandler}>Close</Button>
                </ModalFooter>

            </ModalContent>

        </Modal>
    )
}

export default CourseModal
