import '/index.css'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import IntroductionPage from '../src/components/Pages/IntroductionPage'
import Portfolio from './components/Pages/Portfolio';
import Journal from '../src/components/Pages/Journal'
import JournalArticle from './components/JournalArticle';
import TerminalPage from './components/Pages/terminalPage';
import ProjectDetail from './components/ProjectDetail';


function App() {
  return (
    <>
    <Navbar />
     <main className="pt-20">
    <Routes>
      <Route path="/" element={<IntroductionPage />} />
      <Route path="whoami" element={<Portfolio />} />
       <Route path="repertoire" element={<TerminalPage />} />
      <Route path="journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<JournalArticle />} />
        <Route path="/repertoire/:slug" element={<ProjectDetail/>} />
    </Routes>
    </main>
    </>
  )
}

export default App