import { BrowserRouter as Route, Redirect } from 'react-router-dom'
import Survey from '../components/survey/survey'
import isUserAuthenticated from './isUserAuthenticated'

const ProtectedRoute = ({route}) => {
    return (isUserAuthenticated()) 
            ? <Route path={route}><Survey /></ Route>
            : <Redirect to="/enterData"/>
}

export default ProtectedRoute
