/* eslint-disable no-use-before-define */
import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import './enter-data.sass'

const EnterData = () => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})

    let inputFields = [
        {
            name: "firstName",
            id: "form__first-name",
            label: "Your First Name"
        },
        {
            name: "lastName",
            id: "form__last-name",
            label: "Your Last Name"
        },
        {
            name: "age",
            id: "form__age",
            label: "Your Age"
        },
    ]

    let submitForm = event => {
        event.preventDefault()

        if (isFormValid) {
            for (let key of Object.keys(values)) {
                localStorage.setItem(key, values[key])
            }
        }
    }

    let validateObjectValues = (item, conditional) => Object.values(item).every(conditional.bind(this));

    let isFormValid = _ => {
        if(Object.values(values).length <= 0) return false
        const isError = validateObjectValues(errors, (x) => x === "")
        const isFilled = validateObjectValues(values, (x) => x.length > 0);

        return isError && isFilled
    }

    let isTextInputValid = text => text.match('^[a-zA-Z]*$') ? true : false

    let isNumericInputValid = number => (number.match('^[0-9]*$') && number > 0 && number < 120) ? true : false

    let handleInputValue = event => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
        validate({[name]: value})
    }

    let validate = inputField => {
        let temp = { ...errors }
        
        if("firstName" in inputField) {
            (inputField.firstName.length && isTextInputValid(inputField.firstName))
            ? temp.firstName = ""
            : temp.firstName = inputField.firstName
        }

        if("lastName" in inputField) {
            (inputField.lastName.length && isTextInputValid(inputField.lastName))
            ? temp.lastName = ""
            : temp.lastName = inputField.lastName
        }

        if("age" in inputField) {
            (inputField.age.length && isNumericInputValid(inputField.age))
            ? temp.age = ""
            : temp.age = inputField.age
        }

        setErrors({ ...temp })
    }

    return (
        <div>
            <h1>First, Introduce Yourself</h1>
            <form className="enterData__form" onSubmit={submitForm}>
                <div className="form">
                    {inputFields.map((value, index) => {
                        return (
                            <TextField key={index}
                                       {...(errors[value.name] && { error: true })}
                                       name={value.name}
                                       className="form__textfield"
                                       id={value.id}
                                       label={value.label}
                                       variant="outlined"
                                       onChange={handleInputValue}
                                       required
                            />
                        )
                    })}
                    <Button className="form__submit-btn"
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!isFormValid()}>Begin</Button>
                </div>
            </form>
        </div>
    )
}

export default EnterData
