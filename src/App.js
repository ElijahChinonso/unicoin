import './App.css';
import { Routes, Route } from 'react-router-dom';
import Logo from "./pages/home/component/logo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Logo/>}/>
      </Routes>

    </div>
  );
}

export default App;
