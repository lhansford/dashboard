import React from "react";
import { APPS } from "../constants/apps";
import AppIcon from "../components/AppIcon/AppIcon";
import BudgetGoals from "../components/BudgetGoals/BudgetGoals";

const BOX_STYLE = {
  background: "rgba(115, 115, 115, 0.8)",
  borderRadius: '1em',
  padding: "2em",
};

const Home = () => (
  <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
    <div
      style={{
        display: "grid",
        gridGap: "2em",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        height: 'fit-content',
        marginBottom: '2em',
        ...BOX_STYLE,
      }}
    >
      {APPS.map(app => (
        <AppIcon key={app.name} {...app} />
      ))}
    </div>
    <div style={{ ...BOX_STYLE }}>
      <h2>Budget Goals</h2>
      <BudgetGoals />
    </div>
  </div>
);

export default Home;
