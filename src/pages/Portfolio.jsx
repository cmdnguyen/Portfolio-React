import {
  Container,
  Heading,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'

import { FaGithub } from 'react-icons/fa'

import ProjectCard  from '../components/Project'

import {
  DonBoscoHiepSiSkills,
  RestaurantExpressSkills,
  ScreamAustinSkills,
  SocialNetworkAPISkills,
  TechBlogSkills,
  TextEditorSkills
} from '../components/Skills'

const ProjectGitHubButton = ({
  href,
}) => {
  return (
    <Button
      id='github-button'
      as={'a'}
      variant='solid'
      colorScheme='blue'
      href={href}
      leftIcon={<FaGithub />}>
      Repo
    </Button>
  )
}

const DeployedSiteButton = ({
  href,
}) => {
  return (
    <Button
      id='deployed-site-button'
      as={'a'}
      variant='solid'
      colorScheme='blue'
      href={href}
    >
      Website
    </Button>
  )
}

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
