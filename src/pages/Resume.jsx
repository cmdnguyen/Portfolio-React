import { Container, Heading, Button } from '@chakra-ui/react'
import MainSkills from '../components/Skills'

// Download PDF Button Function
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
        {/* Resume Download Button */}
        <Button onClick={downloadPDFButton}>
          Download Resume
        </Button>
      </Container>

      {/* Skills section */}
     <MainSkills/>
    </Container>
  );
}
