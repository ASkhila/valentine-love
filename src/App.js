import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoveQuestion from "./Components/LoveQuestion";
import CelebrationPage from "./Components/CelebrationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoveQuestion />} />
        <Route path="/love-accepted" element={<CelebrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
