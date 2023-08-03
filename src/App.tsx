import { Provider } from "react-redux";
import store from "./store/index";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CheckoutPage from "./Pages/CheckoutPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign_up" element={<SignUpPage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
