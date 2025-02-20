import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import About from "./components/About/about"
import Assessment from "./components/Assessment/assessment"
import Question from "./components/Assessment/question"
import Question10 from "./components/Assessment/question10"
import Question2 from "./components/Assessment/question2"
import Question3 from "./components/Assessment/question3"
import Question4 from "./components/Assessment/question4"
import Question5 from "./components/Assessment/question5"
import Question6 from "./components/Assessment/question6"
import Question7 from "./components/Assessment/question7"
import Question8 from "./components/Assessment/question8"
import Question9 from "./components/Assessment/question9"
import Home from "./components/Home/home"
import Tasks from "./components/Tasks/tasks"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/self-assessment" element={<Assessment />} />
        <Route path="/self-assessment/question" element={<Question />} />
        <Route path="/self-assessment/question2" element={<Question2 />} />
        <Route path="/self-assessment/question3" element={<Question3 />} />
        <Route path="/self-assessment/question4" element={<Question4 />} />
        <Route path="/self-assessment/question5" element={<Question5 />} />
        <Route path="/self-assessment/question6" element={<Question6 />} />
        <Route path="/self-assessment/question7" element={<Question7 />} />
        <Route path="/self-assessment/question8" element={<Question8 />} />
        <Route path="/self-assessment/question9" element={<Question9 />} />
        <Route path="/self-assessment/question10" element={<Question10 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App