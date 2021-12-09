import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Wines from 'components/Wines'
import { WINE_URL } from './utils/urls'

export const App = () => {
  const [wines, setWines] = useState([])

  useEffect(() => {
    fetch(WINE_URL)
    .then((res) => res.json())
    .then((data) => setWines(data.results))
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/wines' component={Wines} />
        <Route exact path='/wines/search' component={Wines} />
        <Route exact path='/wines/titles/:title' component={Wines} />
        <Route exact path='/wines/tasters/:taster_name' component={Wines} />
        <Route exact path='/wines/tasters/twitter/:taster_twitter_handle' component={Wines} />
        <Route exact path='/wines/countries/:country' component={Wines} />
        <Route exact path='/wines/countries/provinces/:province' component={Wines} />
        <Route exact path='wines/varieties/:variety' component={Wines} />
        <Route exact path='/wines/top_rated' component={Wines} />
        <Route exact path='/wines/most_expensive' component={Wines} />
      </Switch>
    </BrowserRouter>
  )
}