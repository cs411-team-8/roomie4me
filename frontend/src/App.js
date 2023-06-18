import CreateProfile from "./components/CreateProfile/CreateProfile";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    try {
      const test = async () => {
        if (document.cookie) {
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
          setUser(data);
        }
      };
      test();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProfile" element={<CreateProfile />} />
        {user && (
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
