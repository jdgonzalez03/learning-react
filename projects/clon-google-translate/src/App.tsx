import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants.d";
import { ArrowsIcon } from "./component/Icons";
import { LanguageSelector } from "./component/LanguageSelector";

function App() {
  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage } = useStore()

  return (
    <Container fluid>
      <h1>Google Translate </h1>
      <Row>
        <Col>
          <LanguageSelector onChange={setFromLanguage}/>
        </Col>

        <Col>
          <Button variant="link" disabled={fromLanguage === AUTO_LANGUAGE} onClick={ interchangeLanguages }>
            <ArrowsIcon/>
          </Button>
        </Col>

        <Col>
          <LanguageSelector onChange={setToLanguage}/>
        </Col>
        
      </Row>
    </Container>
  );
}

export default App;
