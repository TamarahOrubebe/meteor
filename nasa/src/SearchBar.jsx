import { useState } from "react";

export default function SearchBar({ setSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  }

  function handleClick(event) {
    event.preventDefault();
    setSearchTerm("Largest");
  }

  function handleYearSearch(event) {
    event.preventDefault();
    const from = event.target.elements[0].valueAsNumber;
    const to = event.target.elements[1].valueAsNumber;
    setSearchTerm(`${from}?${to}`);
  }

  return (
      <section className="searchBar">
        <div className="nasa-header">
        <img className="nasa" src="/src/NASA_logo.png"></img>
        <h1>NASA Meteorite Landings</h1>
        </div>
        <h3>Search by name</h3>
      <div className="searchName">
        <form onSubmit={handleSubmit}>
          <input
            value={newSearchTerm}
            onChange={(event) => {
              setNewSearchTerm(event.target.value);
            }}
            placeholder="Search..."
          ></input>
          <button>Search</button>
        </form>
        
      <button onClick={handleClick}>Heaviest 10 Meteorites</button>
      </div>
      <form onSubmit={handleYearSearch}>
        <h3>Search by year</h3>
        <label htmlFor="startYear">From </label>
        <input id="startYear" type="number" placeholder="YYYY"></input>
        <label htmlFor="endYear"> To </label>
        <input id="endYear" type="number" placeholder="YYYY"></input>
        <button>Search</button>
      </form>
    </section>
  );
}
