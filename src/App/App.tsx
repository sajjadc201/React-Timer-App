import React, { useEffect } from "react";
import "./App.css";
import Timer from "../Timer/Timer";
import { initNotification } from "../CloudMessaging";

const App: React.FC = () => {
  useEffect(() => {
    initNotification();
  }, []);
  return (
    <div className="app-container">
      <div className="main">
        <Timer />
      </div>
    </div>
  );
};

export default App;
