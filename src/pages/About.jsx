import { Text, Container, Heading, Icon, Tooltip, Image, Flex, SimpleGrid } from '@chakra-ui/react'
import { FaReact, FaHtml5, FaJs, FaCss3Alt, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiChakraui, SiMysql, SiSequelize, SiMongodb, SiMongoose } from 'react-icons/si'

const SkillToolTip = ({
  children,
  label
}) => {
  return (
    <Tooltip
      label={label}
      fontSize='md'>
      {children}
    </Tooltip>
  )
}



export default function About() {
  return (
    <Container maxW='container.md' mb={10}>
      <Heading>
        About Me
      </Heading>
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
          <SimpleGrid columns={{ base: 8, sm: 10, md: 15, lg: 15 }} spacing={5}>
            <SkillToolTip label={'React'}>
              <span>
                <FaReact size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'JavaScript'}>
              <span>
                <FaJs size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'HTML5'}>
              <span>
                <FaHtml5 size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'CSS3'}>
              <span>
                <FaCss3Alt size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'Boostrap'}>
              <span>
                <FaBootstrap size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'Chakra UI'}>
              <span>
                <SiChakraui size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'Node.js'}>
              <span>
                <FaNodeJs size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'Express.js'}>
              <span>
                <SiExpress size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'MySQL'}>
              <span>
                <SiMysql size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'Sequelize'}>
              <span>
                <SiSequelize size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'MongoDB'}>
              <span>
                <SiMongodb size={25} />
              </span>
            </SkillToolTip>
            <SkillToolTip label={'Mongoose'}>
              <span>
                <SiMongoose size={25} />
              </span>
            </SkillToolTip>
          </SimpleGrid>
        </Container>
      </Flex>
    </Container>
  );
}