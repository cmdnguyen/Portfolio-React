import { Heading, Text, Container, Flex } from '@chakra-ui/react'
import Nav from './NavBar'

export default function Header() {
  return (
    <Container>
      <Flex
        align="start"
        justify="start"
      >
        <Heading
          px="6"
        >
          Catherine Nguyen
        </Heading>
        <Text
          px="6"
        >
          Full Stack Web Developer
        </Text>
        <Nav />
      </Flex>
    </Container>
  );
}