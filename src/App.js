import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './Components/LoginForm/Loginform';
import RegisterForm from './Components/registerForm/RegisterForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/auth/register" element={<RegisterForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
