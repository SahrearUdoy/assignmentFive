import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreTechnologies from "./components/Explore-Technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>

      <Suspense fallback={<p>Loading Technologies.............</p>}>
        <ExploreTechnologies></ExploreTechnologies>
      </Suspense>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
