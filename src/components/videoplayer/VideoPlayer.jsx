import { Box } from '@chakra-ui/react'
import React from 'react'
import intro from '../../assets/videos/intro.mp4'

const VideoPlayer = () => {
    return (
        <Box paddingY={'8'}>
            <video
                src={intro}
                autoPlay={true}
                loop
                muted
                controls
                controlsList='nodownload nofullscreen noremoteplayback'
                disablePictureInPicture
                disableRemotePlayback
            ></video>
        </Box>
    )
}

export default VideoPlayer
