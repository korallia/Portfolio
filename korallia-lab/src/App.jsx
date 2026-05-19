import '/index.css'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import IntroductionPage from '../src/components/Pages/IntroductionPage'

function App() {
  return (
    <>
    <Navbar />
     <main className="pt-20">
    <Routes>
      <Route path="/" element={<IntroductionPage />} />
    </Routes>
    </main>
    </>
  )
}

export default App