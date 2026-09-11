import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreTechnologies from "./components/Explore-Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>

      <Suspense fallback={<p>Loading Technologies.............</p>}>
        <ExploreTechnologies></ExploreTechnologies>
      </Suspense>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
