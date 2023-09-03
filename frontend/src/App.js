import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Thanks from "./component/Thanks";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/thanks" element={<Thanks/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
