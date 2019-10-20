import { NASA_IMAGE_ENDPOINT } from '../constants/constants';

export interface INasaImageResponse {
  explanation: string;
  title: string;
  url: string;
  hdurl: string;
}
export const getBackgroundImage = async (): Promise<INasaImageResponse> => {
  const response = await fetch(`${NASA_IMAGE_ENDPOINT}?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
  const text = await response.text();
  return JSON.parse(text) as INasaImageResponse;
}
