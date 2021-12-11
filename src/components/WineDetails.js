import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const WineDetails = () => {
  const [details, setDetails] = useState([])

  const { title } = useParams()

  useEffect(() => {
    fetch(`https://winemag.herokuapp.com/wines/titles/${title}`)
      .then((res) => res.json())
      .then((json) => setDetails(json.response))
  }, [title])

  return (
    <section>
    <div>
      <Link to="/" exact="true">
        Go Back
      </Link>
    </div>

    <div>
      {details.map((wine) => (
      <div className='reviewSection'>
          <h1>{wine.title}</h1>
          <p>{wine.description}</p>
          <p>{wine.taster_name}</p>
          <p>{wine.taster_twitter_handle}</p>
      </div>
      ))}
      {details.map((wine) => (
      <div className='pointsSection'>
          <h2>{wine.points}</h2>
          <p>{wine.price}</p>
          <p>{wine.variety}</p>
          <p>{wine.province}, {wine.country}</p>
          <p>{wine.winery}</p>
      </div>
      ))}
    </div>
  </section>
  )
}

export default WineDetails


// { title, description, taster_name, taster_twitter_handle, points, price, variety, province, country, winery }