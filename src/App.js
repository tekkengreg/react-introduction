import React, { useEffect, useState } from "react";
import "./App.css";
import DisplayCard from "./components/DisplayCard";
import DisplaySelectedCard from "./components/DisplaySelectedCard";
import CardProvider from "./providers/CardProvider";

const App = () => (
  <CardProvider>
    <div className="App">
      <DisplaySelectedCard />
      <DisplayCard />
    </div>
  </CardProvider>
);

export default App;
