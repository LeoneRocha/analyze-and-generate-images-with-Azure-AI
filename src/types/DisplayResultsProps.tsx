import { AnalyzeImageResponse } from "./AnalyzeImageResponse";

export type DisplayResultsProps = {
    imageUrl: string;
    results: AnalyzeImageResponse | undefined;
  };