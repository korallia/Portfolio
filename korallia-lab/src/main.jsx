
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import '/index.css'
import App from './App.jsx'
import { LanguageProvider } from "./context/language/LanguageProvider.jsx";
import { ProjectsProvider } from "./context/projects/ProjectsProvider.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <LanguageProvider>
        <ProjectsProvider>
          <App />
        </ProjectsProvider>
      </LanguageProvider>
    </BrowserRouter>
)
