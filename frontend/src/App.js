import CreateProfile from "./components/CreateProfile/CreateProfile";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    try {
      const test = async () => {
        const accessToken = document.cookie.split("access-token=")[1];
        const url = "http://localhost:8082" + "/api/v1/user/myinfo";
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await fetch(url, options);

        const data = await response.json();
        console.log(data);
      };
      test();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
