import { Box, Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../xyz/Sidebar'
import { fileUploadCss } from '../../auth/Register'

const CreateCourses = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const categories = [
        'Web Development',
        'App Development',
        'UI/UX Design',
        'Data Science',
        'Other',
    ];

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }

    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Container py={'14'}>
                <form>
                    <Heading
                        children='Create Course'
                        textTransform={'uppercase'}
                        mb={'14'}
                        textAlign={['center', 'left']}
                    />
                    <VStack spacing={'6'} >
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder='Title'
                            type='text'
                            focusBorderColor="purple.400"
                        />
                        <Input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder='Course Description'
                            type='text'
                            focusBorderColor="purple.400"
                        />
                        <Input
                            value={createdBy}
                            onChange={(e) => setCreatedBy(e.target.value)}
                            placeholder='Creator Name'
                            type='text'
                            focusBorderColor="purple.400"
                        />
                        <Select focusBorderColor='purple.400' value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            {
                                categories.map((item) => (
                                    <option key={item} value={item}>{item}</option>
                                ))
                            }
                        </Select>
                        <Input
                            accept='image/*'
                            required
                            type='file'
                            focusBorderColor="purple.400"
                            css={{
                                '&::file-selector-button': {
                                    ...fileUploadCss, color:'purple.400'
                                },
                            }}
                            onChange={changeImageHandler}
                        />
                        {imagePrev && (
                                <Image src={imagePrev} boxSizing={'border-box'} objectFit={'contain'} />
                            )}
                            <Button w={'full'} colorScheme='purple' type='submit'>Create</Button>
                    </VStack>
                </form>

            </Container>
            <Sidebar />
        </Grid>
    )
}

export default CreateCourses
