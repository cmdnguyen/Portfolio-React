import {
  Button,
  Container,
  Flex,
  Box,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VisuallyHidden
} from '@chakra-ui/react'
import {
  MdEmail, MdOutlineEmail,
} from 'react-icons/md'
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa'

import { useState } from 'react';

const ContactButton = ({
  children,
  label,
  href,
  leftIcon
}) => {
  return (
    <Button
      size="md"
      height="48px"
      width="250px"
      variant="ghost"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      as={'a'}
      href={href}
      _hover={{ border: '2px solid #1C6FEB' }}
      leftIcon={leftIcon}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};




export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    alert(`Message sent`);
  };

  const handleNameChange = (event) => setName(event.target.value)
  const handleEmailChange = (event) => setEmail(event.target.value)
  const handleMessageChange = (event) => setMessage(event.target.value)


  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={1} alignItems="flex-start">
                      <ContactButton href={'tel:+15042340916'}
                        leftIcon={<FaPhoneAlt size="20px" />}>
                        + 1 504 234-0916
                      </ContactButton>
                      <ContactButton
                        href={'mailto:cmdnguyen94@gmail.com'}
                        leftIcon={<MdEmail size="20px" />}
                      >
                        cmdnguyen94@gmail.com
                      </ContactButton>
                    </VStack>
                  </Box>

                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form onSubmit={handleSubmit}>
                        <FormControl id="name" isRequired isInvalid={!name}>
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <FaUserAlt color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              size="md"
                              onChange={handleNameChange}
                            />
                          </InputGroup>
                          {name ? (
                            ''
                          ) : (
                            <FormErrorMessage>Name is required.</FormErrorMessage>
                          )}
                        </FormControl>

                        <FormControl id="email" isRequired isInvalid={!email}>
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input
                              type="email"
                              size="md"
                              
                              onChange={handleEmailChange}
                            />
                          </InputGroup>
                          {email ? (
                            ''
                          ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                          )}
                        </FormControl>

                        <FormControl id="message" isRequired isInvalid={!message}>
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                            onChange={handleMessageChange}
                          />
                          {message ? (
                            ''
                          ) : (
                            <FormErrorMessage>Message is required.</FormErrorMessage>
                          )}
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button type='submit' variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                            Submit
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}