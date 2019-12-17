import React, { useState } from 'react'

const Finder = ({ persons }) => {

    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const results = !searchTerm ? persons : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))

    return(
        <div>
            <input 
                onChange={handleChange}
                value={searchTerm}
                placeholder="Search for user"
            />
            <ul>
                {results.map((item, i) => (
                    <li key={i}>{item.name}: {item.number}</li>
                ))}
            </ul>
        </div>
    )
}

export default Finder