import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'

const VideoCard = ({ title, description, num, lectureId, courseId, deleteButtonHandler }) => {
    return (
        <Stack direction={['column', 'row']} my={'6'}
            borderBottom={'1px solid #6B46C1'}
            borderRadius={'md'}
            alignItems={'center'}
            justifyContent={['flex-start', 'space-between']}
            p={['4', '8']}
        >
            <Box>
                <Heading size={'md'} children={`#${num} ${title}`} />
                <Text children={`${description}`} />
            </Box>
            <Button fontSize={['xl','4xl']} color={'red.500'} onClick={() => deleteButtonHandler(courseId, lectureId)}>
                <RiDeleteBin7Fill  />
            </Button>
        </Stack>
    )
}

export default VideoCard
