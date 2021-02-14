import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ScenicSpot from "./ScenicSpot/ScenicSpot";

function App() {
  const [allData, setAllData] = useState([]);
  
  return (
    <Router>
      <>
        <Route exact path="/scenicSpot">
          <ScenicSpot allData={allData} setAllData={setAllData} />
        </Route>
      </>
    </Router>
  );
}

export default App;
