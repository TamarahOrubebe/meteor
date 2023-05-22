import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import SearchBar from "./SearchBar.jsx"
import List from "./List.jsx"

function App() {
  const [searchTerm, setSearchTerm] = useState("Aachen")

  return (
    <>
     <Header searchTerm={searchTerm}/>
     <SearchBar setSearchTerm={setSearchTerm}/>
     <List searchTerm={searchTerm}/>
    </>
  )
}

export default App
