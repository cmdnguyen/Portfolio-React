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
        </SimpleGrid>
      </Container>
    </Container>
  );
}
