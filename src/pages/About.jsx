import { Text, Container, Heading, Icon, HStack, Tooltip, Image, Flex } from '@chakra-ui/react'
import { FaReact, FaHtml5, FaJs, FaCss3Alt, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiChakraui, SiMysql, SiSequelize, SiMongodb, SiMongoose } from 'react-icons/si'

export default function About() {
  return (
    <Container maxW='container.md' mb={10}>
      <Heading>
        About Me
      </Heading>
      <br />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Image
          borderRadius='full'
          boxSize='200px'
          src='/images/CatherineNguyen_2018_SQHeadshot.jpg'
          alt='Catherine Nguyen'
        />
        <Container>
          <Text p={3}>
            Hi, my name is Catherine Nguyen. Welcome to my portfolio page.
            I am currently learning full stack web development in a coding bootcamp.
            Previously, I was a broadcast journalist who has worked in TV markets in Texas and Louisiana.
            I have won a Regional Emmy for best newscasts thanks to my creativty and planning.
            I left journalism to pursue better opportunities and decided to pursue web development.
            My creative, problem-solving and collaborative skills are great assets to any team.
            I like to travel and try different foods.
            I am also an amateur photographer and videographer.
            You can learn more about me and check out my previous work.
            Feel free to browse around and reach out to me for opportunities or network.

          </Text>
          <Text>Here are some of my technical skills:</Text>
          <HStack>
            <Tooltip label='React' fontSize='md'>
              <span>
                <Icon as={FaReact} boxSize={6}></Icon>
              </span>
            </Tooltip>
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
            <Tooltip label='Bootstrap' fontSize='md'>
              <span>
                <Icon as={FaBootstrap} boxSize={6}></Icon>
              </span>
            </Tooltip>
            <Tooltip label='Chakra UI' fontSize='md'>
              <span>
                <Icon as={SiChakraui} boxSize={6}></Icon>
              </span>
            </Tooltip>
            <Tooltip label='Node.js' fontSize='md'>
              <span>
                <Icon as={FaNodeJs} boxSize={6}></Icon>
              </span>
            </Tooltip>
            <Tooltip label='Express.js' fontSize='md'>
              <span>
                <Icon as={SiExpress} boxSize={6}></Icon>
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
          </HStack>
        </Container>
      </Flex>
    </Container>
  );
}