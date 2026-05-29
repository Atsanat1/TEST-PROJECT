import React from "react";  
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<HomePage/>}/>  
    <Route path="/about" element={<AboutPage/>} />
</Routes>
</BrowserRouter>
);
