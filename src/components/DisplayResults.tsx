import React from 'react';
import { DisplayResultsProps } from '../types/DisplayResultsProps';

const DisplayResults: React.FC<DisplayResultsProps> = ({ imageUrl, results }) => {
  if (!results) return null;

  const { captionResult, tagsResult, metadata } = results;

  return (
    <div className="mb-4">
      <h2 className="mb-3">Resultados da Análise:</h2>
      {imageUrl && <img src={imageUrl} alt="Analyzed" className="img-fluid rounded" title={captionResult.text} about={captionResult.text} />}
      <h3>
        <strong>Caption:</strong> {captionResult.text}
      </h3>
      <p>
        <strong>Largura:</strong> {metadata.width} px - <strong>Altura:</strong> {metadata.height} px
      </p>
      <p><strong> Tags:</strong> </p>
      <ul className="list-unstyled">
        {tagsResult.values.map((tag) => (
          <li key={tag.name}>
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayResults;
