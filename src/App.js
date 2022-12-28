import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import {Link,Route,Routes,BrowserRouter} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <button className='signButton'><Link id="link" to="/">Signup</Link></button>
      <button className='dashButton'><Link id="link" to="/dashboard">Dashboard</Link></button>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
