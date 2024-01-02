import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  // const {
  //   fromLanguage,
  //   toLanguage,
  //   fromText,
  //   result,
  //   loading,
  //   setFromLanguage,
  //   setFromText,
  //   setResult,
  //   setToLanguage,
  //   interchangeLanguages
  // } = useStore()

  return (
    <Container fluid>
      <h1>Clon Google Translate </h1>
      <Row>
        <Col>
          From
        </Col>

        <Col>
          Intercambiar
        </Col>

        <Col>
          To
        </Col>
        
      </Row>
    </Container>
  );
}

export default App;
