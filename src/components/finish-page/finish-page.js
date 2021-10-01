import React from 'react'
import Icon from '@material-ui/core/Icon'
import './finish-page.sass'

const FinishPage = () => {
    return (
        <div className="finish-page">
            <Icon className="finish-page__icon">check_circle_outlined</Icon>
            <h1>Thank You!</h1>
            <h2>Your survey answers has been sent to be processed. We'll get in touch with you soon.</h2>
        </div>
    )
}

export default FinishPage
