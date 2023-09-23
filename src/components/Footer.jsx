import { Box, Container } from '@chakra-ui/react'

export default function Footer(props) {
    return (
      <Box as="footer" role="contentinfo" bg="bg.accent.default"{...props}>
        <Container>
          This is my footer
        </Container>
      </Box>
    );
  }
  