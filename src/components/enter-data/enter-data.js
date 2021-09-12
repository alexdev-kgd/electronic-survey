import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const EnterData = () => {
    return (
        <div>
            <h1>First, Introduce Yourself</h1>
            <form className="enterData__form">
                <div className="form">
                    <TextField className="form__textfield" id="form__first-name" label="Your Name" variant="outlined" />
                    <TextField className="form__textfield" id="form__last-name" label="Your Name" variant="outlined" />
                    <TextField className="form__textfield" id="form__age" label="Your age" variant="outlined" />
                    <Button className="form__submit-btn"
                            variant="contained"
                            color="primary">Begin</Button>
                </div>
            </form>
        </div>
    )
}

export default EnterData
