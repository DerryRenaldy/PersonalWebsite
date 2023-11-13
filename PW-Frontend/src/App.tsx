import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Home = lazy(() => import("components/pages/Home.tsx"));
import Image from "@assets/images";

function App() {
  return (
    <Suspense
      fallback={
        <div className="text-white font-rubik text-center h-screen flex flex-col justify-center items-center text-[20px] gap-y-4 font-bold">
          <img src={Image.loadingCircle} className="w-10" />
          <p>Loading Assets...</p>
        </div>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
