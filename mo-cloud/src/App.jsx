import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Assessment from "./components/Assessment/assessment"
import Contact from "./components/Contact/contact"
import Home from "./components/Home/home"
import Tasks from "./components/Tasks/tasks"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/self-assessment" element={<Assessment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App