import React from "react";

export default function SearchBar (props) {
    const {onSearch} = props

    return(
        <input type="text" placeholder="Search tasks" onChange={(e) => onSearch(e.target.value)} />
    )
}