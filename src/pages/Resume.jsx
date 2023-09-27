import { Container, Heading, Button, Text, Tooltip, Icon, SimpleGrid } from '@chakra-ui/react'
import { FaReact, FaHtml5, FaJs, FaCss3Alt, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiChakraui, SiMysql, SiSequelize, SiMongodb, SiMongoose } from 'react-icons/si'

const downloadPDFButton = () => {
  // using Java Script method to get PDF file
  fetch('CatherineNguyenResume.pdf').then(response => {
    response.blob().then(blob => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = 'CatherineNguyenResume.pdf';
      alink.click();
    })
  })
}

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

export default function Resume() {
  return (
    <Container>
      <Heading>
        Resume
      </Heading>
      <Container my={3}>
        <Button onClick={downloadPDFButton}>
          Download Resume
        </Button>
      </Container>
      <Container my={1}>
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
    </Container>
  );
}
