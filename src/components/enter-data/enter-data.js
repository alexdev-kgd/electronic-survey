import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import './enter-data.sass'

const EnterData = () => {
    const [ firstName, setFirstName] = useState('')
    const [ lastName, setLastName] = useState('')
    const [ age, setAge] = useState('')

    let submitForm = event => {
        event.preventDefault()

        localStorage.setItem("FirstName", firstName)
        localStorage.setItem("LastName", lastName)
        localStorage.setItem("Age", age)
    }

    let changeFirstNameHandler = event => {
        setFirstName(event.target.value)
    }

    let changeLastNameHandler = event => {
        setLastName(event.target.value)
    }

    let changeAgeHandler = event => {
        setAge(event.target.value)
    }

    return (
        <div>
            <h1>First, Introduce Yourself</h1>
            <form className="enterData__form" onSubmit={submitForm}>
                <div className="form">
                    <TextField className="form__textfield"
                               id="form__first-name"
                               label="Your First Name"
                               variant="outlined"
                               value={firstName}
                               onChange={changeFirstNameHandler}
                               required />
                    <TextField className="form__textfield"
                               id="form__last-name"
                               label="Your Last Name"
                               variant="outlined"
                               value={lastName}
                               onChange={changeLastNameHandler}
                               required />
                    <TextField className="form__textfield"
                               id="form__age"
                               label="Your age"
                               variant="outlined"
                               value={age}
                               onChange={changeAgeHandler}
                               required />
                    <Button className="form__submit-btn"
                            type="submit"
                            variant="contained"
                            color="primary">Begin</Button>
                </div>
            </form>
        </div>
    )
}

export default EnterData
