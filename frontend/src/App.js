import CreateProfile from "./components/CreateProfile/CreateProfile";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/createProfile" element={<CreateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
