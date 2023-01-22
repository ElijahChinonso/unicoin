import './App.css';
import 'animate.css'
import { Routes, Route } from 'react-router-dom';
import Logo from "./pages/home/component/logo";
import SignUp from "./pages/sign_up/component/signUp";
import LogIn from "./pages/log_in/component/logIn";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={"/"} element={<Logo/>}/>
          <Route path={"/signUp"} element={<SignUp/>}/>
          <Route path={"/logIn"} element={<LogIn/>}/>
      </Routes>

    </div>
  );
}

export default App;
