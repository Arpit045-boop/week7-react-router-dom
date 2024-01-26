import { React,lazy,Suspense } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Dashboard from './components/Dashboard'
// import Landing from './components/Landing'
// import Navbar from './components/Navbar'
const Dashboard = lazy(()=> import ('./components/Dashboard'))
const Landing = lazy(()=> import ('./components/Landing'))

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Suspense fallback={"...loading"}><Dashboard/></Suspense> }/>     
        <Route path='/' element={<Suspense fallback={"...loading"}><Landing/></Suspense>}/> 
      </Routes>
  </BrowserRouter>
    </div>
  
  )
}

export default App
