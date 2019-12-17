import React from 'react'

const AddPerson = ({ handleSubmit, handleNameChange, handleNumberChange, newNumber, newName }) => {

    return(
        <div>
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}

export default AddPerson