import { Box, Container, HStack, chakra, useColorModeValue, VisuallyHidden } from '@chakra-ui/react'
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si'


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

export default function Footer(props) {
  return (
    <Box as="footer" bg="gray.100"{...props}>
      <Container>
        <HStack>
          <SocialButton boxSize={6} label={'GitHub'} href={'https://github.com/cmdnguyen'}>
            <SiGithub />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/cmdnguyen/'}>
            <SiLinkedin />
          </SocialButton>
          <SocialButton label={'X'} href={'https://twitter.com/cmdnguyen'}>
            <SiX />
          </SocialButton>

        </HStack>
      </Container>
    </Box>
  );
}
