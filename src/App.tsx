import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { analyzeImage } from './services/iaimageanalysisserices';
import { ImageAnalysisResult } from './types/AnalyzeImageResponse';
import DisplayResults from './components/DisplayResults';
import { apiConfigAzure } from './services/config';

//require('dotenv').config();

function App() { 
  const [inputValue, setInputValue] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState<ImageAnalysisResult>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    setImageUrl(e.target.value); // Atualize a URL da imagem quando o input mudar
  };

  const handleAnalyzeImage = async () => {
    console.log('Analisando imagem....');
    try {
      // 'tags,read,caption,denseCaptions,smartCrops,objects,people'
      const features = [ 'Tags', 'Caption']; // Personalize conforme necessário
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
   
    <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-md-6">
        <h1>IA VISION RECOGNIZE</h1>
        <form>
          <div className="mb-3">
            <label  className="form-label">URL da Imagem ou Prompt</label>
            <input type="text" className="form-control" id="imageInput" placeholder="Insira a URL ou o prompt da imagem"  
            onChange={handleInputChange} />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleAnalyzeImage}>Analisar Imagem</button>
     
          <button type="button" className="btn btn-secondary" onClick={handleGenerateImage}>Gerar Imagem</button>
        </form>
        
        <DisplayResults imageUrl={imageUrl} results={analysisResult} />
      </div>
    </div>
  </div>
  
  );
} 
export default App;
