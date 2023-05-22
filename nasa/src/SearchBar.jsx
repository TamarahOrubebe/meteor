import { useState } from "react"

export default function SearchBar({setSearchTerm}) {

    const [newSearchTerm, setNewSearchTerm] = useState("")

    function handleSubmit (event) {
        event.preventDefault()
        setSearchTerm(newSearchTerm)
        setNewSearchTerm("")
    } 

    return (
        <form onSubmit={handleSubmit}>
            <input value={newSearchTerm} 
            onChange={(event)=>{
                setNewSearchTerm(event.target.value)
            }}
            placeholder="Search..."></input>
        <button>Search</button>
        </form>
    )
}