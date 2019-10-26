import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { useBackground } from "./hooks";
import ProgressiveImage from "react-progressive-image-loading";
import Routes from "./components/Routes/Routes";

const backgroundStyles = {
  height: '100vh',
  width: '100vw',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  position: 'fixed',
  zIndex: -1,
} as const;

const App: React.FC = () => {
  const background = useBackground();
  return (
    <div className="App">
      {background && (
          <ProgressiveImage
            preview={background.url}
            src={background.hdurl}
            render={(src, style) => (
              <div
                style={{
                  ...style,
                  ...backgroundStyles,
                  backgroundImage: `url(${src})`
                }}
              />
            )}
          />
        )}
      <Router basename="/dashboard">
        <Routes />
      </Router>
    </div>
  );
};

export default App;
