import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import PredictorsPage from "./pages/PredictorsPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import BreastPage from "./pages/BreastPage";
import LungPage from "./pages/LungPage";
import HeartPage from "./pages/HeartPage";
import DiabetesPage from "./pages/DiabetesPage";
import Footer from "./components/Footer";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Routes without Navbar */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Routes with Nav and footer */}
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <HomePage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/predictors"
              element={
                <div>
                  <Navbar />
                  <PredictorsPage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/predictors/breast"
              element={
                <div>
                  <Navbar />
                  <BreastPage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/predictors/lung"
              element={
                <div>
                  <Navbar />
                  <LungPage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/predictors/heart"
              element={
                <div>
                  <Navbar />
                  <HeartPage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/predictors/diabetes"
              element={
                <div>
                  <Navbar />
                  <DiabetesPage />
                  <Footer />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div>
                  <Navbar />
                  <AboutPage />
                  <Footer />
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
