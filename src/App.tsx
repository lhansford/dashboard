import React from "react";
import "./App.css";
import { useBackground } from "./hooks";
import ProgressiveImage from "react-progressive-image-loading";

const backgroundStyles = {
  height: '100vh',
  width: '100vw',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

const App: React.FC = () => {
  const background = useBackground();
  console.log(background);
  return (
    <div className="App">
      {background && (
        <ProgressiveImage
          preview={background.url}
          src={background.hdurl}
          render={(src, style) => (
            <div
              style={{ ...style, ...backgroundStyles, backgroundImage: `url(${src})` }}
            />
          )}
        />
      )}
    </div>
  );
};

export default App;
