import HomeLogo from "./components/HomeLogo";
import HomeAbout from "./components/HomeAbout";
import HomeLogin from "./components/HomeLogin";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url('assets/img/background.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <HomeLogo />
      <HomeAbout />
      <HomeLogin />
      <Footer />
    </div>
  );
}

export default App;
