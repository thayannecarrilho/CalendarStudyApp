import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import StudyHours from './pages/StudyHours'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/study-hours' element={<StudyHours/>}/>
        </Routes>
      </Router>
  );
};

export default App;
