import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing =  lazy(() => import('./components/Landing'))
function App() {

  
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense> } />
          <Route path='/' element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function AppBar(){
  const navigate = useNavigate();

  return <div>
  <button onClick={()=>{
    navigate("/");
  }}>Landing Page</button>
  <button onClick={()=>{
    navigate("/dashboard");
  }}>Dashboard</button>
</div>
}
export default App
