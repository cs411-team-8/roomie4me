import React from "react";
import HomeAbout from "./HomeAbout";
import HomeLogin from "./HomeLogin";
import HomeLogo from "./HomeLogo";
import Footer from "../Footer";
import { useEffect, useState } from "react";

function Home() {
  const [loggedIn, setLoggedIn] = useState(true);
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
          setLoggedIn(true);
          const response = await fetch(url, options);

          const data = await response.json();
          console.log(data);
          const registered = data.registered;
          console.log(registered);
          if (registered) {
            window.location.href = "/dashboard";
          } else {
            window.location.href = "/createProfile";
          }
        } else {
          setLoggedIn(false);
        }
      };
      test();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="text-center">
      {!loggedIn && (
        <div>
          <HomeLogo />
          <HomeAbout />
          <HomeLogin />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
