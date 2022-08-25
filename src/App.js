import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<NavBar />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logIn' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
