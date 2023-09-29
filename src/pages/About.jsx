import { Text, Container, Heading, Image, Flex} from '@chakra-ui/react'
import MainSkills from '../utils/Skills';

export default function About() {
  return (
    <Container id='about-page' maxW='container.md' mb={10}>
      <Heading id='about-title'>
        About Me
      </Heading>
      {/* Flex container with headshot, bio and skill section */}
      <Flex
        id='About-Me-Section'
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Image
          id='headshot'
          borderRadius='full'
          boxSize='200px'
          src='/images/CatherineNguyen_2018_SQHeadshot.jpg'
          alt='Catherine Nguyen'
        />
        <Container id='bio-section'>
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

          {/* Skills section with tooltip describing the icon while hover over it */}
         <MainSkills />
        </Container>
      </Flex>
    </Container>
  );
}