import HomeContainer from "./Components/HomeComponents/HomeContainer";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <HomeContainer />
      </Router>
    </div>
  );
}

export default App;
