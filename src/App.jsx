import { useState } from 'react'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import List from './Pages/List/List'
import Single from './Pages/Single/Single'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />

            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userid' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>


            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productid' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>

          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;
