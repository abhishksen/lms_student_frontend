import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import '../../styles/home.css'
// import bg from '../../assets/images/bg.png'
import bg from '../../assets/images/bg.jpg'
import intro from '../../assets/videos/intro.mp4'
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <VStack
            width={"full"}
            // alignItems={["center", "flex-start"]}
            alignItems={"flex-start"}
            spacing={'8'}
          >
            <Heading children="LEARN FROM THE INDUSTRY EXPERTS" size={'2xl'} />
            <Text fontSize={'xl'} children="Find a new way of learning with interactive coursewok." />
            <Link to="/courses">
              <Button size={"lg"} colorScheme='purple'>
                Get Started
              </Button>
            </Link>
          </VStack>

          <Image className='bg_img' boxSize={'md'} src={bg} objectFit="contain" />
        </Stack>
      </div>
      <Box padding={"8"} bg={'blackAlpha.200'}>
        <Heading textAlign={"center"} fontFamily={"body"} paddingBottom={"4"} children="Popular Courses" />
        <HStack className='skillBanner' justifyContent={"space-evenly"} marginTop={"7"}>
          <FaReact />
          <FaNodeJs />
          <FaFigma />
          <FaReact />
          <FaNodeJs />
        </HStack>
      </Box>
      <div className="vidContainer">
        <video
          src={intro}
          controls
          controlsList='nodownload nofullscreen noremoteplayback'
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  )
}

export default Home
