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

import { MdEmail, MdOutlineEmail, } from 'react-icons/md'
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
      _hover={{ border: '2px solid white' }}
      leftIcon={leftIcon}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};




export default function Contact() {
  const formik = useFormik({
    initialValues: {
      submitName: '',
      submitEmail: '',
      submitMessage: ''
    },
    validationSchema: Yup.object({
      submitName: Yup.string().required('Name is required').min(2, 'Please enter a valid name'),
      submitEmail: Yup.string().required('Email is required').email('Please enter a valid email'),
      submitMessage: Yup.string().required('Message is required').min(2, 'Please write a detailed message')
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm()
    }
  })

  return (
    <Container maxW="full" mt={5} centerContent overflow="hidden">
      <Flex>

        {/* Contact Box */}
        <Box
          colorScheme='blue'
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>

          {/* Left side of the contact box */}
          <Box p={4}>
            <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 10 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text my={{ sm: 3, md: 3, lg: 5 }}>
                    Fill the form below to contact
                  </Text>
                  {/* Personal Contact Info */}
                  <Box py={5}>
                    <VStack>
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

              {/* Right side of the contact */}
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack as='form' spacing={5} onSubmit={formik.handleSubmit}>

                      {/* Name Field for submission */}
                      <FormControl isInvalid={formik.errors.submitName && formik.touched.submitName}>
                        <FormLabel>Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <FaUserAlt color="gray.800" />
                          </InputLeftElement>
                          <Input
                            name='submitName'
                            onChange={formik.handleChange}
                            value={formik.values.submitName}
                            placeholder='Enter Name Here'
                            onBlur={formik.handleBlur}
                          />
                        </InputGroup>
                        <FormErrorMessage>{formik.errors.submitName}</FormErrorMessage>
                      </FormControl>

                      {/* Email field for submission */}
                      <FormControl isInvalid={formik.errors.submitEmail && formik.touched.submitEmail}>
                        <FormLabel>Email</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input
                            name='submitEmail'
                            type='email'
                            onChange={formik.handleChange}
                            value={formik.values.submitEmail}
                            placeholder='Enter Email Here'
                            onBlur={formik.handleBlur}
                          />

                        </InputGroup>
                        <FormErrorMessage>{formik.errors.submitEmail}</FormErrorMessage>
                      </FormControl>

                      {/* Message Field for submission */}
                      <FormControl isInvalid={formik.errors.submitMessage && formik.touched.submitMessage}>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          name='submitMesssage'
                          type='textarea'
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="Enter Message Here"
                          onChange={formik.handleChange}
                          value={formik.values.message}
                          onBlur={formik.handleBlur}
                        />
                        <FormErrorMessage>{formik.errors.submitMessage}</FormErrorMessage>
                      </FormControl>


                      <Button
                        type='submit'
                        variant="solid"
                        bg="#0D74FF"
                        color="white"
                        _hover={{}}>
                        Submit
                      </Button>


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
