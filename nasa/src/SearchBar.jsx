import { useState } from "react"

export default function SearchBar({setSearchTerm}) {

    const [newSearchTerm, setNewSearchTerm] = useState("")

    function handleSubmit (event) {
        event.preventDefault()
        setSearchTerm(newSearchTerm)
        setNewSearchTerm("")
    } 

    function handleClick (event) {
        event.preventDefault()
        setSearchTerm("Largest")
    }

    function handleYearSearch (event) {
        event.preventDefault()
        const from = event.target.elements[0].valueAsNumber
        const to = event.target.elements[1].valueAsNumber
        setSearchTerm(`${from}?${to}`)
    }

    return (
        <> 
        <form onSubmit={handleSubmit}>
            <input value={newSearchTerm} 
            onChange={(event)=>{
                setNewSearchTerm(event.target.value)
            }}
            placeholder="Search..."></input>
        <button>Search</button>
        </form>
        <button onClick={handleClick}>Get the heaviest ten meteorites</button>
        <form onSubmit={handleYearSearch}>
            <h3>Search for meteorites that fell inbetween these years</h3>
            <label htmlFor="startYear">From </label>
            <input id="startYear" type="number"></input>
            <label htmlFor="endYear">  To </label>
            <input id="endYear" type="number"></input>
            <button>Search</button>
        </form>
        </>
    )
}