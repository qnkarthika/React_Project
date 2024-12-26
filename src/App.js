
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/Login' element={<Login/>}/>
                  <Route path='/Details' element={<Details/>}/>
              </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
