import { VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiUser3Fill } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'
import LinkButton from './LinkButton'

const Sidebar = () => {

  const location = useLocation();

  return (
    <VStack spacing={'8'} p={'14'} >
      <LinkButton url={'dashboard'} Icon={RiDashboardFill} text={'Dashboard'}
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton url={'createcourse'} Icon={RiAddCircleFill} text={'Create'}
        active={location.pathname === '/admin/createcourse'}
      />
      <LinkButton url={'courses'} Icon={RiEyeFill} text={'Courses'}
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton url={'users'} Icon={RiUser3Fill} text={'Users'}
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  )
}

export default Sidebar
