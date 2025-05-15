import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter, Route, Routes } from "react-router"
import App from "./pages/app/app.tsx"
import Welcome from "./pages/welcome.tsx"
import "./styles/main.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
