import React from "react";
import HomeAbout from "./HomeAbout";
import HomeLogin from "./HomeLogin";
import HomeLogo from "./HomeLogo";
import Footer from "../Footer";

function Home() {
  return (
    <div className="text-center">
      <HomeLogo />
      <HomeAbout />
      <HomeLogin />
      <Footer />
    </div>
  );
}

export default Home;
