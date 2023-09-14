import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Plan from './Pages/Plan'
import Movies from './Pages/Movies'
import Details from './Pages/Details'
import TvShow from './Pages/TvShow'
import ResetTop from './ResetTop'
import Login from './Components/Account/Login'
import Search from './Search/Search'

const App = () => {
  return (
    <>
      <ResetTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/tvshow' element={<TvShow />}/>
        <Route path='/plan' element={<Plan />} />
        <Route path='/details/:id/:title' element={<Details />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default App