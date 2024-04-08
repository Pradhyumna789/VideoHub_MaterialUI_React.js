import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Notes from './pages/Notes';
import Create from './pages/Create';
import './App.css'

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route exact path='/' element = {<Notes/>}/>
            <Route path = '/create' element={<Create/>}/>
          </Routes>
        </Router>
      </div>
  );
};

export default App
