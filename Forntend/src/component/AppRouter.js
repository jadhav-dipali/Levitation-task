import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./LoginUser";
import Register from "./Register";
import Form1 from "./Form1";
import Table from "./Table";

export default  function AppRouter(){
    return<>
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/form-1" element={<Form1/>} />
          <Route path="/table" element={<Table/>} />
        </Routes>    
    </BrowserRouter>
    </>
}