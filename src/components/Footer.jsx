import { Box, Container, Stack, chakra, useColorModeValue, VisuallyHidden, Text } from '@chakra-ui/react'
import { SiX } from 'react-icons/si'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© {new Date().getFullYear()} Catherine Nguyen. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'GitHub'} href={'https://github.com/cmdnguyen'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/cmdnguyen/'}>
            <FaLinkedin />
          </SocialButton>
          <SocialButton label={'X'} href={'https://twitter.com/cmdnguyen'}>
            <SiX />
          </SocialButton>

        </Stack>
      </Container>
    </Box>
  );
}
