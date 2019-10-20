import React from "react";
import { APPS } from "../constants/apps";
import AppIcon from "../components/AppIcon/AppIcon";

const Home = () => (
  <div style={{ width: '100vw', display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
    <div
      style={{
        display: "grid",
        background: "rgba(115, 115, 115, 0.5)",
        padding: "2em",
        gridGap: "2em",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        height: 'fit-content',
        borderRadius: '1em',
      }}
    >
      {APPS.map(app => (
        <AppIcon key={app.name} {...app} />
      ))}
    </div>
  </div>
);

export default Home;
