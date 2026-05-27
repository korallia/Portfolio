import '/index.css'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import IntroductionPage from '../src/components/Pages/IntroductionPage'
import Portfolio from './components/Pages/Portfolio';
import Journal from '../src/components/Pages/Journal'
import JournalArticle from './components/JournalArticle';

function App() {
  return (
    <>
    <Navbar />
     <main className="pt-20">
    <Routes>
      <Route path="/" element={<IntroductionPage />} />
      <Route path="whoami" element={<Portfolio />} />
      <Route path="journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<JournalArticle />} />
    </Routes>
    </main>
    </>
  )
}

export default App