import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Nav from "./components/navbar/Nav";

function App() {
  return (
   <div>
     <BrowserRouter>
     <Nav/>
       <Routes>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
