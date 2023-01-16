import React, {useState} from "react"

export default function Form(props) {
    const left = "yellow"
    const right = "orange"

    // const newLeft = left ? "yellow" : "purple"
    // const newRight = right ? "orange" : "blue"

    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    pronouns: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    bio: "",
    buttonDisabled: true,
    leftColor: left,
    rightColor: right
})

function handleChange(event) {
    event.preventDefault()
    const {name, value} = event.target
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }))
    if (formData.firstName !== "" && formData.lastName !== "" && formData.pronouns !== "" && formData.jobTitle !== "" && formData.email !== "" && formData.phoneNumber !== "" && formData.bio !== "") {
        setFormData(prevData => ({...prevData, buttonDisabled: false}))
    }
}

const createBadge = (event) => {
    event.preventDefault()
    props.submit(formData)
    setFormData(prevData => ({
        firstName: "",
        lastName: "",
        pronouns: "",
        jobTitle: "",
        email: "",
        phoneNumber: "",
        bio: "",
        buttonDisabled: true,
        leftColor: left,
        rightColor: right
    }))
}

function handleSubmit(event) {
    event.preventDefault()
}



    return (
        <div>
            <form className="form" onSubmit={createBadge}>
                <input 
                    name="firstName"
                    type="text"
                    minLength={3}
                    value={formData.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                />
                <input
                    name="lastName"
                    type="text"
                    minLength={3}
                    value={formData.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                <input 
                    name="pronouns"
                    type="text"
                    minLength={3}
                    value={formData.pronouns}
                    placeholder="Pronouns"
                    onChange={handleChange}
                />
                <input 
                    name="jobTitle"
                    type="text"
                    minLength={3}
                    value={formData.jobTitle}
                    placeholder="Job Title"
                    onChange={handleChange}
                />
                <input
                    name="email"
                    type="email"
                    minLength={3}
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input 
                    name="phoneNumber"
                    type="number"
                    minLength={3}
                    value={formData.phoneNumber}
                    placeholder="Phone Number"
                    onChange={handleChange}
                />
                <textarea 
                    name="bio"
                    minLength={3}
                    maxLength={65}
                    value={formData.bio}
                    placeholder="Tell us about yourself..."
                    onChange={handleChange}
                />
                <button className="submit-button" 
                    disabled={formData.buttonDisabled}
                    onChange={handleSubmit}>Create Badge</button>
            </form>
            
        </div>
    )
}