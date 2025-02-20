import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import About from "./components/About/about"
import Assessment from "./components/Assessment/assessment"
import Home from "./components/Home/home"
import Tasks from "./components/Tasks/tasks"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/self-assessment" element={<Assessment />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App