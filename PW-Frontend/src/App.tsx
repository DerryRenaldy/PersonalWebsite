import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "components/pages/Home.tsx";
const Home = lazy(() => import("components/pages/Home.tsx"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="text-white font-rubik text-center h-screen flex justify-center items-center text-[20px] font-bold">
          Loading Assets...
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
