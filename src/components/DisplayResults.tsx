import React from 'react'; 
import { DisplayResultsProps } from '../types/DisplayResultsProps';
 
const DisplayResults: React.FC<DisplayResultsProps> = ({ imageUrl, results }) => {
  if (!results) return null;

  // Aqui você pode formatar e exibir os resultados conforme necessário
  return (
    <div>
      <h3>Resultados da Análise:</h3>
      {imageUrl && <img src={imageUrl} alt="Analyzed" style={{ maxWidth: '100%' }} />}
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};

export default DisplayResults;
