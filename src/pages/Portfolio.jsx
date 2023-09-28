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

import {FaGithub} from 'react-icons/fa'

import { 
  DonBoscoHiepSiSkills, 
  RestaurantExpressSkills, 
  ScreamAustinSkills, 
  SocialNetworkAPISkills, 
  TechBlogSkills, 
  TextEditorSkills } from '../components/Skills'

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
        {/* Restaurant Express Project */}
        <Card
          id='restaurant-express-card'
          maxW='400px'
          m={3}
        >
          <CardBody>
            <Image
              id='restaurant-express-image'
              src='images/Restaurant Express.png'
              alt='Restaurant Express'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Restaurant Express</Heading>
              <Text>
                This is an app for ordering from a restaurant.
                Users can create an account and login.
                Simply navigate through the menu to create the order.
                You will be able to add and subtract from your order as you wish.
                When finished, you can click the view order button,
                Look over your order to ensure it is what you desire and the click the confirm order button.
              </Text>
              <RestaurantExpressSkills />
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='1'>
              <ProjectGitHubButton href={'https://github.com/esbev/Restaurant'} />
              <DeployedSiteButton href={'https://restaurant-express-c9c955225096.herokuapp.com/'} />
            </ButtonGroup>
          </CardFooter>
        </Card>

        {/* Text Editor Project */}
        <Card
          id='text-editor-card'
          maxW='400px'
          m={3}
        >
          <CardBody>
            <Image
              id='text-editor-image'
              src='images/JATE-Demo.png'
              alt='Just Another Text Editor'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Text Editor</Heading>
              <Text>
                This is a text editor that can run in a browser or as a Progressive Web Application.
                Users can save any text inputs in the text editor and it will save into a database when the user clicks out of the application.
                This application can also function offline since the data in the app is stored locally through IndexedDB.
              </Text>
              <TextEditorSkills />
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <ProjectGitHubButton href={'https://github.com/cmdnguyen/Text-Editor'} />
              <DeployedSiteButton href={'https://cmdnguyen-text-editor-fbc030432d18.herokuapp.com/'} />
            </ButtonGroup>
          </CardFooter>
        </Card>

        {/* Tech Blog Project */}
        <Card
          id='tech-blog-card'
          maxW='400px'
          m={3}
        >
          <CardBody>
            <Image
              id='tech-blog-image'
              src='images/Tech Blog.png'
              alt='Tech Blog'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Tech Blog</Heading>
              <Text>
                This is a tech blog created with Express and Sequelize.
                This blog publishes users' posts and comments.
                Users can also see other posts and comments.
                Users can create their own account and use it to login.
                They can add, edit and delete posts.
                They can also add comments to other posts.
              </Text>
              <TechBlogSkills />
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <ProjectGitHubButton href={'https://github.com/cmdnguyen/Tech-Blog'} />
              <DeployedSiteButton href={' https://cmdnguyen-tech-blog-0555a22cc12a.herokuapp.com/'} />
            </ButtonGroup>
          </CardFooter>
        </Card>

        {/* Social Network API Project */}
        <Card
          id='social-network-card'
          maxW='400px'
          m={3}
        >
          <CardBody>
            <Image
              id='social-network-image'
              src='images/Social Network API.png'
              alt='Social Network API'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Social Network API</Heading>
              <Text>
                This is a Social Media API that can add, update and remove users and thoughts into the database.
                You can also create and remove friends and reactions to the associated user and thought respectively.
              </Text>
              <SocialNetworkAPISkills />
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <ProjectGitHubButton href={'https://github.com/cmdnguyen/Social-Network-API'} />
            </ButtonGroup>
          </CardFooter>
        </Card>

        {/* Scream Austin Project */}
        <Card
          id='scream-austin-card'
          maxW='400px'
          m={3}
        >
          <CardBody>
            <Image
              id='scream-austin-image'
              src='images/Scream Austin.png'
              alt='Scream Austin'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Scream Austin</Heading>
              <Text>
                This is a website that showcases local Austin, Texas artists and venues.
                It provides music connoisseurs easy access to information on their favorite local artists.
                The site highlights artists with their bios and YouTube videos.
              </Text>
              <ScreamAustinSkills />
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <ProjectGitHubButton href={'https://github.com/alexisstrong11/Scream-Austin'} />
              <DeployedSiteButton href={'https://alexisstrong11.github.io/Scream-Austin/'} />
            </ButtonGroup>
          </CardFooter>
        </Card>

        {/* Don Bosco Hiep Si Project */}
        <Card
          id='don-bosco-hiep-si-card'
          maxW='400px'
          m={3}
        >
          <CardBody>
            <Image
              id='don-bosco-hiep-si-image'
              src='images/Don Bosco Hiep Si.png'
              alt='Don Bosco Hiep Si'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Don Bosco Hiep Si</Heading>
              <Text>
                This is an app for the Knights of the Eucharist division for my local VEYM chapter.
                The students can create an account, view the announcements and submit feedback.
                They can keep track of their team points and vote on life lesson ideas.
                I started on the project shortly after the creator deployed it.
                I am still learning the technologies, but I will be an occasional contributor.
              </Text>
              <DonBoscoHiepSiSkills />
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <DeployedSiteButton href={'https://hiepsi.donbosco.cc/'} />
            </ButtonGroup>
          </CardFooter>
        </Card>

      </SimpleGrid>
    </Container>
  );
}
