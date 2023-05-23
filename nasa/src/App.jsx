import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import SearchBar from "./SearchBar.jsx"
import List from "./List.jsx"

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
     {/* <Header searchTerm={searchTerm} className="header"/> */}
     <SearchBar setSearchTerm={setSearchTerm} className="searchBar"/>
     <List searchTerm={searchTerm}/>
    </>
  )
}

export default App
