import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import intro from '../../assets/videos/intro.mp4'

const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);

    const lectures = [
        {
            _id: 'whjhgjkhwkj1',
            title: 'Lecture on react basics 1',
            description: 'lorem ipusm description ',
            video: {
                url: 'hdejfrhfkrjfl',
            },
        },
        {
            _id: 'whjhgjkhwkj2',
            title: 'Lecture on react basics 2',
            description: 'lorem ipusm description ',
            video: {
                url: 'hdejfrhfkrjfl',
            },
        },
        {
            _id: 'whjhgjkhwkj3',
            title: 'Lecture on react basics 3',
            description: 'lorem ipusm description ',
            video: {
                url: 'hdejfrhfkrjfl',
            },
        },
        {
            _id: 'whjhgjkhwkj4',
            title: 'Lecture on react basics 4',
            description: 'lorem ipusm description ',
            video: {
                url: 'hdejfrhfkrjfl',
            },
        }
    ];

    return (
        <Grid
            minH={'95vh'}
            templateColumns={['1fr', '3fr 1fr']}
            p={['4', '6']}
            marginTop={['2rem', '1.5']}
        >
            <Box p={'2'}>
                <video
                    width={'100%'}
                    controls
                    controlsList='nodownload noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                    src={intro}
                ></video>
                <Heading children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} m={'4'} />
                <Heading children='Description' fontSize={'md'} m={'4'} />
                <Text m={'4'} children={lectures[lectureNumber].description} />
            </Box>
            <VStack p={'2'}>
            <Heading children='Course Content' />
                {
                    lectures.map((element, index) => (
                        <button
                            key={element._id}
                            onClick={() => setLectureNumber(index)}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                margin: 0,
                                border: 'none',
                                borderBottom: '1px solid #805AD5'
                            }}
                        >
                            <Text noOfLines={1}>
                                #{index + 1} {element.title}
                            </Text>
                        </button>
                    ))
                }
            </VStack>
        </Grid>
    )
}

export default CoursePage
