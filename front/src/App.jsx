import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Navbar from "./components/Navbar";
function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/add" element={<Add />} />
      </Routes>
    </>
  )
}

export default App
