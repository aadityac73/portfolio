import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Experience />
    </>
  );
}

export default App;
