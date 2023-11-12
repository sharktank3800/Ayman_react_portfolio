import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";


import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume"


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contract" element={<Portfolio />} />
        <Route path="/contract" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;