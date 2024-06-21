import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { analyzeImage } from './services/iaimageanalysisserices';
import DisplayResults from './components/DisplayResults';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setImageUrl(e.target.value); // Atualize a URL da imagem quando o input mudar
  };

  const handleAnalyzeImage = async () => {
    console.log('Analisando imagem....');
    try {
      // 'tags,read,caption,denseCaptions,smartCrops,objects,people'
      const features = ['Tags', 'Caption']; // Personalize conforme necessário
      const result = await analyzeImage(inputValue, features);
      setAnalysisResult(result);
      console.log('Analisada imagem!');
    } catch (error) {
      console.error('Failed to analyze image:', error);
    }
  };
  const handleGenerateImage = () => {
    // Função para gerar a imagem
    console.log('Gerando imagem para o prompt:', inputValue);
  };
  return (

    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>IA VISION RECOGNIZE</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>URL da Imagem ou Prompt</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira a URL ou o prompt da imagem"
                value={inputValue}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAnalyzeImage}>
              Analisar Imagem
            </Button>{' '}
            {/* Remova o botão Gerar Imagem se não for necessário */}
            <Button variant="secondary" onClick={handleGenerateImage}>
              Gerar Imagem
            </Button>
          </Form>
          {/* Adicione o componente DisplayResults aqui */}
          <DisplayResults imageUrl={imageUrl} results={analysisResult} />
        </Col>
      </Row>
    </Container>

  );
}
export default App;
