import AllRoutes from './AllRoutes'
import './App.css'
import Dashboard from './pages/Dashboard'
import SignInPage from './pages/SignInPage'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {
  
  return (
    <div className='h-[100%]'>
     {/* <SignInPage/> */}
     {/* <Dashboard/> */}
     {/* <AllRoutes/> */}
     
     <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
