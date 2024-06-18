import axios from 'axios'; 
import {  apiConfigAzure } from './config';
import { AnalyzeImageResponse } from '../types/AnalyzeImageResponse';

const axiosInstance = axios.create({
  baseURL: apiConfigAzure.endpoint,
  headers: {
    'Ocp-Apim-Subscription-Key': apiConfigAzure.subscriptionKey,
    'Content-Type': 'application/json'
  }
});

export const analyzeImage = async (imageUrl: string, features: string[]): Promise<AnalyzeImageResponse> => {
  const params = new URLSearchParams({ 'visualFeatures': features.join(',') });

  try {
    const response = await axiosInstance.post(`/analyze?${params}`, { url: imageUrl });
    
    console.log( JSON.stringify(response.data, null, 2));

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error calling Azure AI Vision Image Analysis:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};
