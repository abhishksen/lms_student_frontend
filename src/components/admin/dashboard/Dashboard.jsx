import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
// import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../xyz/Sidebar'
import Databox from '../xyz/Databox'
import Bar from '../xyz/Bar'
import { DoughnutChart, LineChart } from '../xyz/Chart'

const Dashboard = () => {
    return (
        <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
            <Box
                boxSize={'border-box'}
                py={'14'}
                px={['4', '0']}
            >
                <Text textAlign={'center'} opacity={'0.5'}
                    children={`Last updated on ${String(new Date()).split(' ').slice(0, 4)}`}
                />
                <Heading children='Dashboard' ml={['0', '10']} py={['4', '6']} mb={'4'} textAlign={['center', 'left']} />
                <Stack
                    direction={['column', 'row']}
                    minH={'24vh'}
                    justifyContent={'flex-start'}
                    spacing={'10'}
                    pl={['0', '10']}
                >
                    <Databox title={'Total Views'} qty={30} qtyPercentage={37} profit={true} />
                    <Databox title={'Users'} qty={300} qtyPercentage={57} profit={true} />
                    <Databox title={'Subscription'} qty={70} qtyPercentage={7} profit={false} />
                </Stack>
                <Box
                    m={['0', '10']}
                    my={['6']}
                    borderRadius={'lg'}
                    border={'1px'}
                    p={['0', '6']}
                    mt={'4'}
                >
                    <Heading textAlign={['center', 'left']} size={'md'} py={['6', '0']} children='Views Graph' />
                    <LineChart />
                </Box>
                <Grid templateColumns={['1fr', '2fr 1fr']}>
                    <Box>
                        <Heading
                            children='Progress Bar'
                            size={'sm'}
                            paddingBottom={'6'}
                            ml={['0', '10']}
                        />
                        <Box
                            ml={['0', '10']}
                            border={'1px'}
                            borderRadius={'lg'}
                            p={'4'}
                        >
                            <Bar title='Views' value={30} profit={false} />
                            <Bar title='Users' value={300} profit={true} />
                            <Bar title='Subscription' value={70} profit={true} />
                        </Box>
                    </Box>
                    <Box>
                        <Heading
                            children='Users'
                            size={'sm'}
                            my={['6', '0']}
                            ml={['0', '10']}
                            paddingBottom={['0', '6']}
                        />
                        <Box
                            ml={['0', '10']}
                            border={'1px'}
                            borderRadius={'lg'}
                            p={'4'}
                        >
                            <DoughnutChart />
                        </Box>
                    </Box>
                    {/* <Box
                        boxSizing='border-box'
                        ml={['0', '4']}
                    >
                        <Heading
                            // textAlign={'center'}
                            children='Users'
                            size={'sm'}
                            py={'6'}
                        />
                        <DoughnutChart />
                    </Box> */}
                </Grid>
            </Box>
            <Sidebar />
        </Grid>
    )
}

export default Dashboard
