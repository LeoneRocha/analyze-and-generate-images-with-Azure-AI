  // Definição de tipo para o JSON
 export interface ImageAnalysisResult {
  modelVersion: string;
  captionResult: {
    text: string; 
  };
  metadata: {
    width: number;
    height: number;
  };
  tagsResult: {
    values: Tag[];
  };
}

export interface Tag {
  name: string; 
} 