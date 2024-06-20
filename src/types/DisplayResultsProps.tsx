import { ImageAnalysisResult } from "./AnalyzeImageResponse";

export type DisplayResultsProps = {
    imageUrl: string;
    results: ImageAnalysisResult | undefined;
  };