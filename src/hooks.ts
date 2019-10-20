import { useState, useEffect } from 'react';

import { getBackgroundImage, INasaImageResponse } from './helpers/misc';

export const useBackground = () => {
  const [image, setImage] = useState<INasaImageResponse | null>(null);
  useEffect(() => {
    getBackgroundImage().then(setImage);
  }, []);
  return image;
}
