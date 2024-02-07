import "./App.css";
import Header from "components/Header";
import Footer from "components/Footer";
import HomePage from "components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantPage from "components/RestaurantPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<RestaurantPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
