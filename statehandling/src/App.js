import "./App.css";

import "react-notifications/lib/notifications.css";
import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function App() {
  let showNotification = () => {
    NotificationManager.info(" Welcome to Deep");
  };

  return (
    <div className="App">
      <button className="button" onClick={showNotification}>
        Save
      </button>
      <NotificationContainer />
    </div>
  );
}

export default App;
