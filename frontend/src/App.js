import CreateProfile from "./components/CreateProfile/CreateProfile";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/Errors/NotFound";
import CreateRequest from "./components/CreateRequest/CreateRequest";
import RequestsFull from "./components/CreateRequest/RequestsFull";
import NotLoggedIn from "./components/Errors/NotLoggedIn";
import ViewRequests from "./components/ViewRequests/ViewRequests";
import DetailedRequest from "./components/ViewRequests/DetailedRequest";
import MyAccount from "./components/MyAccount/MyAccount";
import InDev from "./components/Errors/InDev";
import NoRequests from "./components/ViewRequests/NoRequests";
import TOS from "./components/TOS/TOS";
import Privacy from "./components/PrivacyPolicy/Privacy";
import Donate from "./components/Donate/Donate";
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

  const [myRequests, setRequests] = useState([]);
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

        {user && !user.registered && (
          <Route
            path="/createProfile"
            element={<CreateProfile user={user} />}
          />
        )}

        {!user && <Route path="/createProfile" element={<NotLoggedIn />} />}

        {user && !user.registered && (
          <Route path="/createProfile" element={<CreateProfile />} />
        )}

        {user && (
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        )}

        {!user && <Route path="/dashboard" element={<NotLoggedIn />} />}

        {user && myRequests && myRequests.length < 7 && (
          <Route
            path="/createRequest"
            element={<CreateRequest requests={myRequests} />}
          />
        )}

        {user && myRequests && myRequests.length >= 7 && (
          <Route path="/createRequest" element={<RequestsFull />} />
        )}

        {!user && <Route path="/createRequest" element={<NotLoggedIn />} />}

        {user && <Route path="/viewRequests" element={<ViewRequests />} />}

        {!user && <Route path="/viewRequests" element={<NotLoggedIn />} />}

        {user && (
          <Route path="/myAccount" element={<MyAccount user={user} />} />
        )}

        {!user && <Route path="/myAccount" element={<NotLoggedIn />} />}

        {user && <Route path="/myDMs" element={<InDev />} />}

        {!user && <Route path="/myDMs" element={<NotLoggedIn />} />}

        {user && (
          <Route
            path="/request/:authorid/:semester"
            element={<DetailedRequest user={user} />}
          />
        )}

        {!user && (
          <Route
            path="/request/:authorid/:semester"
            element={<NotLoggedIn />}
          />
        )}

        {user && <Route path="/noRequests" element={<NoRequests />} />}

        {!user && <Route path="/noRequests" element={<NotLoggedIn />} />}

        <Route path="/tos" element={<TOS />} />

        <Route path="/privacy" element={<Privacy />} />

        <Route path="/donate" element={<Donate />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
