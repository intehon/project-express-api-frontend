import React, { useState, useEffect } from 'react'
import { SELECT_URL } from 'utils/urls'

const Dropdown = () => {
    const [select, setSelect] = useState('')

    useEffect(() => {
        fetch(SELECT_URL(select))
          .then((res) => res.json())
          .then((data) => {
              setSelect(data.results)
           }
          )
      }, [select])

    const onSelectChange = (event) => {
        setSelect(event.target.value)
    }

    return (
        <form>
            <label htmlFor='wines'>Sort by:</label>
            <select value={select} onChange={onSelectChange}>
                <option value='top_rated'>Top Rated Wines</option>
                <option value='most_expensive'>Most Expensive Wines</option>
            </select>
        </form>
    )
}

export default Dropdown