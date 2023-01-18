import './App.css';
import { Routes, Route } from 'react-router-dom';
import Logo from "./pages/home/component/logo";
import SignUp from "./pages/sign_up/component/signUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Logo/>}/>
          <Route path={"/signUp"} element={<SignUp/>}/>
      </Routes>

    </div>
  );
}

export default App;
