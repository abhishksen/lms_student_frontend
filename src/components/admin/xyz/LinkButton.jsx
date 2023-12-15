import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ url, Icon, text, active }) => {
    return (
        <Link to={`/admin/${url}`}>
            <Button
                alignItems={'center'}
                justifyContent={'space-between'}
                w={'40'} variant={active ? 'solid' : 'outline'} fontSize={'larger'} colorScheme={active ? 'purple' : ''}>
                <Heading
                    fontSize={'md'}
                    textAlign={'left'}
                    children={text}
                />
                <Icon style={{fontSize:'1.3rem'}}/>
            </Button>
        </Link>
    )
}

export default LinkButton
