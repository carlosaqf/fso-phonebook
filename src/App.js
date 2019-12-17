import React, { useState } from 'react';
import Finder from './Components/Finder'
import Display from './Components/Display'
import AddPerson from './Components/AddPerson'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Carlos Fegurgur' , number: '(671) 483-2699' },
    { name: 'Antonio Quan', number: '(805) 215-2118' },
    { name: 'Dan Abramov', number: '(124) 323-4345' },
    { name: 'Mary Poppendieck', number: '(392) 642-3122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  // const [searchTerm, setSearchTerm] = useState('')
  // const [searchResults, setSearchResults] = useState([])

  // Create copy of persons array and add new Object containing name and number of person being added
  const handleSubmit = (e) => {
    
    e.preventDefault()

    // console.log('This is the name', newName)
    // console.log(typeof newName)
    // console.log('This is the current name', persons[0].name)
    // console.log(typeof persons[0].name)
    // console.log(newName === persons[0].name)
    // console.log('This is the number', newNumber)
    // console.log(persons)
    // console.log('This is the searchTerm', searchTerm)

    if (persons.filter(person => person.name.toLowerCase() === newName.toLowerCase()).length > 0){
      alert(`${newName} already exists`)
    }else if (newName === ''){
      alert('Please enter a name')
    }else if (persons.filter(person => person.number === newNumber).length > 0){
      alert('Number already exists')
    }else if (newNumber === ''){
      alert('Please enter a number')
    }else{
      console.log(formatNumber(newNumber))
      setPersons([...persons, { name: newName, number: formatNumber(newNumber)}])
      setNewName('')
      setNewNumber('')
      alert('Submit Completed')
    }
  }

  // Sets name input to temporary newName value
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const formatNumber = (num) => {
    num = num.replace(/[^\d]/g, "")
    if (num.length === 10){
      return num.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
    }
    return null
  }

  // Sets number input to temporary newNumber value
  const handleNumberChange = (e) => {
    console.log(e.target.value)
    if (e.target.value.length <= 10){
      setNewNumber(e.target.value)
    }else{
      alert('Number is too long')
    }
  }

  // const handleFilterChange = (e) => {
  //   setSearchTerm(e.target.value)
  // }

  // useEffect(() => {
  //   const results = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
  //   setSearchResults(results)
  // }, [searchTerm, persons])

  return(
    <div>
      <h2>Phonebook</h2>

      {/* <p>Filter shown with </p>
      <input
        type="text"
        placeholder="Search for user"
        onChange={handleFilterChange}
        value={searchTerm}
      />
      <ul>
        {console.log(searchResults)}
        {searchResults.map((person, i) => (<li key={i}>{person.name}: {person.number}</li>))}
      </ul> */}

      <h2>Find a person</h2>
      <Finder persons={persons} />

      <h2>Add a new person</h2>

      <AddPerson 
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
        newName={newName}
      />

        {/* <form onSubmit={handleSubmit}>

          <div>
            name: 
            <input
              onChange={handleNameChange}
              placeholder="Enter name"
              value={newName}
            />
          </div>

          <div>
            number: 
            <input 
              onChange={handleNumberChange}
              placeholder="Enter number"
              value={newNumber}
            />
          </div>

          <div>
            <button type="submit">Add</button>
          </div>
          
        </form> */}

      <h2>Numbers</h2>
        <ul>
          <Display persons={persons} />
        </ul>

    </div>
  )
}

export default App