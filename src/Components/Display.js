import React from 'react';

const Display = ({ persons, handleDelete }) => {
  return(
    <div>
      <ul>
        {console.log('this is the current persons', persons)}
        {persons
          .map(person => (
            <li key={person.name}>
              {person.name} {person.number}
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Display