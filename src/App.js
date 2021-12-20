import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import WineList from './components/WineList'
import WineDetails from './components/WineDetails'
import TopRated from './components/TopRated'
import MostExpensive from './components/MostExpensive'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" exact element={<WineList />}>
          </Route>

          <Route path="/wines/titles/:title" element={<WineDetails />}>
          </Route>

          <Route path="/wines/top-rated" element={<TopRated />}>
          </Route>

          <Route path="/wines/most-expensive" element={<MostExpensive />}>
          </Route>

        </Routes>
      </main>
    </BrowserRouter>
  )
}