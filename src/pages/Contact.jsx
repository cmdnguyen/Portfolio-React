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
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <FaUserAlt color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
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