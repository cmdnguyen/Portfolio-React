import { Container, Heading, Card, Tooltip, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Text, Image, Icon, SimpleGrid, HStack } from '@chakra-ui/react'
import { FaGithub, FaJs, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaReact, FaYarn } from 'react-icons/fa'
import { SiExpress, SiChakraui, SiMysql, SiSequelize, SiTypescript, SiDotenv, SiHandlebarsdotjs, SiBulma, SiNextdotjs, SiDirectus, SiInsomnia, SiMongodb, SiMongoose } from 'react-icons/si'
import { DiMaterializecss } from 'react-icons/di'

const ProjectGitHubButton = ({
  href,
}) => {
  return (
    <Button
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
    <Container maxW='container.lg' mb={10}>
      <Heading>
        Portfolio
      </Heading>
      <SimpleGrid columns={{lg: 3, md: 2, sm: 1}} spacing={4}>
        <Card maxW='445px' m={3}>
          <CardBody>
            <Image
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
              <Heading size='sm'>Technologies used:</Heading>
              <HStack>
                <Tooltip label='JavaScript' fontSize='md'>
                  <span>
                    <Icon as={FaJs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Express.js' fontSize='md'>
                  <span>
                    <Icon as={SiExpress} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Handlebars.js' fontSize='md'>
                  <span>
                    <Icon as={SiHandlebarsdotjs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Materialize CSS' fontSize='md'>
                  <span>
                    <Icon as={DiMaterializecss} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='MySQL' fontSize='md'>
                  <span>
                    <Icon as={SiMysql} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Sequelize' fontSize='md'>
                  <span>
                    <Icon as={SiSequelize} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Node.js' fontSize='md'>
                  <span>
                    <Icon as={FaNodeJs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
              </HStack>
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
        <Card maxW='sm' m={3}>
          <CardBody>
            <Image
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
              <Heading size='sm'>Technologies used:</Heading>
              <HStack>
                <Tooltip label='JavaScript' fontSize='md'>
                  <span>
                    <Icon as={FaJs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Express.js' fontSize='md'>
                  <span>
                    <Icon as={SiExpress} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Node.js' fontSize='md'>
                  <span>
                    <Icon as={FaNodeJs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
              </HStack>
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
        <Card maxW='sm' m={3}>
          <CardBody>
            <Image
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
              <Heading size='sm'>Technologies used:</Heading>
              <HStack>
                <Tooltip label='JavaScript' fontSize='md'>
                  <span>
                    <Icon as={FaJs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Express.js' fontSize='md'>
                  <span>
                    <Icon as={SiExpress} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Bootstrap' fontSize='md'>
                  <span>
                    <Icon as={FaBootstrap} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='MySQL' fontSize='md'>
                  <span>
                    <Icon as={SiMysql} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Sequelize' fontSize='md'>
                  <span>
                    <Icon as={SiSequelize} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='dotenv' fontSize='md'>
                  <span>
                    <Icon as={SiDotenv} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Handlebars.js' fontSize='md'>
                  <span>
                    <Icon as={SiHandlebarsdotjs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
              </HStack>
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

        <Card maxW='sm' m={3}>
          <CardBody>
            <Image
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
              <Heading size='sm'>Technologies used:</Heading>
              <HStack>
                <Tooltip label='JavaScript' fontSize='md'>
                  <span>
                    <Icon as={FaJs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='MongoDB' fontSize='md'>
                  <span>
                    <Icon as={SiMongodb} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Mongoose' fontSize='md'>
                  <span>
                    <Icon as={SiMongoose} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Node.js' fontSize='md'>
              <span>
                <Icon as={FaNodeJs} boxSize={6}></Icon>
              </span>
            </Tooltip>
                <Tooltip label='Insomnia' fontSize='md'>
                  <span>
                    <Icon as={SiInsomnia} boxSize={6}></Icon>
                  </span>
                </Tooltip>
              </HStack>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <ProjectGitHubButton href={'https://github.com/cmdnguyen/Social-Network-API'} />
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW='sm' m={3}>
          <CardBody>
            <Image
              src='images/Scream Austin.png'
              alt='Scream Austin'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>Scream Austin</Heading>
              <Text>
                Scream Austin is a website that showcases local Austin, Texas artists and venues.
                It provides music connoisseurs easy access to information on their favorite local artists.
                The site highlights artists with their bios and YouTube videos, then directs users to Open Street Map for a list of and directions to performance venues.
              </Text>
              <Heading size='sm'>Technologies used:</Heading>
              <HStack>
                <Tooltip label='JavaScript' fontSize='md'>
                  <span>
                    <Icon as={FaJs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='HTML5' fontSize='md'>
                  <span>
                    <Icon as={FaHtml5} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='CSS3' fontSize='md'>
                  <span>
                    <Icon as={FaCss3Alt} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Bulma CSS' fontSize='md'>
                  <span>
                    <Icon as={SiBulma} boxSize={6}></Icon>
                  </span>
                </Tooltip>
              </HStack>
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
        <Card maxW='sm' m={3}>
          <CardBody>
            <Image
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
              <Heading size='sm'>Technologies used:</Heading>
              <HStack>
                <Tooltip label='React' fontSize='md'>
                  <span>
                    <Icon as={FaReact} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Chakra UI' fontSize='md'>
                  <span>
                    <Icon as={SiChakraui} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='TypeScript' fontSize='md'>
                  <span>
                    <Icon as={SiTypescript} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Next.js' fontSize='md'>
                  <span>
                    <Icon as={SiNextdotjs} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Directus' fontSize='md'>
                  <span>
                    <Icon as={SiDirectus} boxSize={6}></Icon>
                  </span>
                </Tooltip>
                <Tooltip label='Yarn' fontSize='md'>
                  <span>
                    <Icon as={FaYarn} boxSize={6}></Icon>
                  </span>
                </Tooltip>
              </HStack>
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
