import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import About from "./components/About/about"
import Assessment from "./components/Assessment/assessment"
import Home from "./components/Home/home"
import Tasks from "./components/Tasks/tasks"
import LoginPage from "./components/Auth/sign-in"
import SignUpPage from "./components/Auth/sign-up"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/self-assessment" element={<Assessment />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App