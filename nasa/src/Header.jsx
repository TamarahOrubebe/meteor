import {useState} from "react"

export default function Header({searchTerm}) {

    

    return (
        <>
        <h1>NASA Meteorite Data</h1>
        <h2>You have searched for: {searchTerm}</h2>
        </>
    )
}