import React from "react";
import {Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import SignInPage from "./pages/SignInPage";

function AllRoutes() {
  return (
 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignInPage/>}>
        <Route index element={<SignInPage/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
   
  );
}

export default AllRoutes;
