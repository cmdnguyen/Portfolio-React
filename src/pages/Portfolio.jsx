import {
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'


import ProjectCard  from '../components/ProjectCard'

export default function Portfolio() {
  return (
    <Container id='portfolio-page' maxW='full' mb={10}>
      <Heading id='portfolio-title'>
        Portfolio
      </Heading>

      {/* Portfolio Grid */}
      <SimpleGrid
        id='portfolio-grid'
        columns={{ xl: 4, lg: 3, md: 2, sm: 1, base: 1 }}
        spacing={4}
      >
        <ProjectCard />

      </SimpleGrid>
    </Container>
  );
}
