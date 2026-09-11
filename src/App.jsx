import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreTechnologies from "./components/Explore-Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <ExploreTechnologies></ExploreTechnologies>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
