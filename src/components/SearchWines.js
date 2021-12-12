import React, { useState } from 'react'

const SearchWines = () => {
    const [wines, setWines] = useState([])
    const [search, setSearch] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

            fetch(`https://winemag.herokuapp.com/wines/titles/${wines}`)
            .then((res) => res.json())
            .then((json) => {
                setWines(json.response)
                setSearch('')
            })
            .catch(() => {
                console.error()
                setSearch('')
            })
    }

    return (
        <div>
           <form>
               <label htmlFor='wineTitle'>
                   Search by title
                   <input
                   id='wineTitle'
                   type='text'
                   value={wines}
                   onChange={(event) => setWines(event.target.value)} />
               </label>
               <button className='searchButton' type='submit' onClick={handleSubmit}>Search</button>
           </form>
        </div>
    )

}

export default SearchWines