import CreateProfile from "./components/CreateProfile/CreateProfile";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import CreateRequest from "./components/CreateRequest/CreateRequest";
import RequestsFull from "./components/CreateRequest/RequestsFull";
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

  const [requests, setRequests] = useState([]);
  useEffect(() => {
    try {
      const test = async () => {
        if (document.cookie) {
          const accessToken = document.cookie.split("access-token=")[1];
          const url = "http://localhost:8082" + "/api/v1/roomie/myrequests";
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
          setRequests(data);
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
        {user && requests && requests.length < 7 && (
          <Route
            path="/createRequest"
            element={<CreateRequest user={user} requests={requests} />}
          />
        )}
        {user && requests && requests.length >= 7 && (
          <Route
            path="/createRequest"
            element={<RequestsFull user={user} requests={requests} />}
          />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
