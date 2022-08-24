import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/register' element={<Register />} />
          <Route path='/logIn' element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
