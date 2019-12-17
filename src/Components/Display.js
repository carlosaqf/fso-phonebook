import React from 'react';

const Display = ({ persons }) => {
  return(
    persons.map((person, i) => <li key={i}>{person.name}: {person.number}</li>)
  )
}

export default Display