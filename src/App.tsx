import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./App.css";
import { useBackground } from "./hooks";
import ProgressiveImage from "react-progressive-image-loading";
import Routes from "./components/Routes/Routes";

const backgroundStyles = {
  height: "100vh",
  width: "100vw",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "fixed",
  zIndex: -1,
} as const;

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
                style={{
                  ...style,
                  ...backgroundStyles,
                  backgroundImage: `url(${src})`
                }}
              />
            )}
          />
        )}
      <Router>
        <Link to="/">Home</Link>
        <Link to="/something">something</Link>
        <Routes />
      </Router>
    </div>
  );
};

export default App;
