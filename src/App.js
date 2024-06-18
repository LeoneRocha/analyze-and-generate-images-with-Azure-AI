/**
 Em um projeto react gerar o codigo do app.js usando boostrap para serguir o seguinte cenario 

Um título
Uma caixa de texto para inserir a URL da imagem a ser analisada ou o prompt da imagem a ser gerada
Um botão para acionar a análise da imagem e outro para acionar a geração da imagem 
*/ 
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAnalyzeImage = () => {
    // Função para analisar a imagem
    console.log('Analisando imagem:', inputValue);
  };

  const handleGenerateImage = () => {
    // Função para gerar a imagem
    console.log('Gerando imagem para o prompt:', inputValue);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1>IA VISION RECONIZE</h1>
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
            <Button variant="secondary" onClick={handleGenerateImage}>
              Gerar Imagem
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

