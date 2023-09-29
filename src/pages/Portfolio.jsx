import {
  Container,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'


import ProjectCard  from '../components/ProjectCard'

export default function Portfolio() {
  return (
    <Container id='portfolio-page' maxW='container.lg' mb={10}>
      <Heading id='portfolio-title'>
        Portfolio
      </Heading>

      {/* Portfolio Grid */}
      <SimpleGrid
        id='portfolio-grid'
        columns={{ lg: 3, md: 2, sm: 1 }}
        spacing={4}
      >
        <ProjectCard />

      </SimpleGrid>
    </Container>
  );
}
