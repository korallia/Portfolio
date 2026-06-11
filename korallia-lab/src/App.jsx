import '/index.css'
import Navbar from "../src/components/layout/Navbar";
import Footer from '../src/components/layout/Footer';
import { Routes, Route } from "react-router-dom";
import IntroductionPage from '../src/components/Pages/IntroductionPage'
import Portfolio from './components/Pages/Portfolio';
import Journal from '../src/components/Pages/Journal'
import JournalArticle from './components/journal/JournalArticle';
import TerminalPage from './components/Pages/terminalPage';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import RouteReset from "./components/layout/RouteReset";


function App() {
  return (
    <>
      <RouteReset />
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
     <Footer />
    </>
  )
}

export default App