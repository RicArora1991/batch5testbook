import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './App.css'
import ErrorPage from './ErrorPage'
import Header from './Header'
function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<ErrorPage/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
