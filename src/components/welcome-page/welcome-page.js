import Button from '@material-ui/core/Button'
import './welcome-page.sass'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <h1>Hello There!</h1>
            <h2>There is some questions ahead that you should give an answer on.</h2>
            <Link to={'/enterData'}>
                <Button className="welcome-page__start-btn"
                        variant="contained"
                        color="primary">Start Survey</Button>
            </Link>
        </div>
    )
}

export default WelcomePage
