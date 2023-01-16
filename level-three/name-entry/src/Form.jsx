import React, {useState} from "react";

export default function Form() {
const [formName, setFormName] = useState([])
const [currentName, setCurrentName] = useState("")

function handleChange(event) {
    event.preventDefault()
    setCurrentName(event.target.value)
    
}

function handleSubmit(event) {
    event.preventDefault()
    setFormName(prevName => {
        return [
            ...prevName,
            currentName
        ]
    })
    setCurrentName("")
}

const addedName = formName.map(name => {
    return (
        <h1>{name}</h1>
    )
})

    return (
        <div>
            <form className="form">
            <h3 className="name-title">{currentName}</h3>
                <input
                    className="input"
                    name="name"
                    placeholder="Enter Name"
                    onChange={handleChange}
                    value={currentName}
                />
                <button onClick={handleSubmit}>Add to List</button>
            </form>
            <ul className="name-list">
                {addedName}
            </ul>
        </div>
    )
}