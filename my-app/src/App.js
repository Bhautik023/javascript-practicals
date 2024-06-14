import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Footer } from "./Pages/Footer";
import { Contact } from "./Pages/Contact";
import { Header } from "./Components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
