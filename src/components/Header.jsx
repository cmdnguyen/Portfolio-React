import { Heading, Text, Flex, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Nav from './NavBar'

export default function Header(props) {
  return (
    <Flex m="auto"
      id="navbar"
      w="100%"
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}>
      <Link
        to='/'
        id='nameTitle'>
        <Heading
          color='whiteAlpha.900'
          px="6"
          py='1'

        >
          Catherine Nguyen
        </Heading>
        <Text
          color='whiteAlpha.800'
          px="6"
          py='1'
        >
          Full Stack Web Developer
        </Text>
      </Link>
      <Spacer />
      <Nav />
    </Flex>
  );
}