import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { EmployersComponent } from "./pages/employers";


function App() {
  return (
    <div className="App">
      <Header />
      <EmployersComponent />
    </div>
  );
}

export default App;
