import { Container, Heading, Button } from '@chakra-ui/react'
import MainSkills from '../components/Skills'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import ResumePDF from "../../public/CatherineNguyenResume.pdf"

// Download PDF Button Function
const downloadPDFButton = () => {
  // using Java Script method to get PDF file
  fetch(ResumePDF).then(response => {
    response.blob().then(blob => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);
      // Setting various property values
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.download = "CatherineNguyenResume.pdf";
      alink.click();
    })
  })
}
const handlePreviousPage = () => {
  setPageNumber(prevPageNumber => prevPageNumber - 1);
};

const handleNextPage = () => {
  setPageNumber(prevPageNumber => prevPageNumber + 1);
};




export default function Resume() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
        <div style={{ width: '100%', height: '800px', border: '1px solid #ddd' }}>
          <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
          </Document>
        </div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Button onClick={handlePreviousPage} disabled={pageNumber <= 1}>
          Previous Page
        </Button>
        <Button onClick={handleNextPage} disabled={pageNumber >= numPages}>
          Next Page
        </Button>
      </Container>

      {/* Skills section */}
     <MainSkills/>
    </Container>
  );
}
