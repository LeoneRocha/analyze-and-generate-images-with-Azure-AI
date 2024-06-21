import axios from 'axios';
import { ImageAnalysisResult } from '../types/AnalyzeImageResponse'; 

const endpoint =  'https://sherwinimage.cognitiveservices.azure.com/';
const subscriptionKey = 'd43e54f05e2f43a597cb7284971f34b1';

export const analyzeImage = async (
  imageUrl: string,
  features: string[]
): Promise<ImageAnalysisResult> => {

  const params = {
    features: features.join(',').toLowerCase(),
  };
  const baseURL = `${endpoint}/computervision/imageanalysis:analyze?api-version=2024-02-01`;
  console.log('call analyzeImage');
  console.log(baseURL);
  try {
    const response = await axios.post(
      baseURL,
      { url: imageUrl },
      {
        params: params,
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Error calling Azure AI Vision Image Analysis:',
        error.response?.data || error.message
      );
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};   
