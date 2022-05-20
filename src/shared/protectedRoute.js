import { BrowserRouter as Route, Redirect } from 'react-router-dom'

const ProtectedRoute = (props) => {
    return (props.predicate)
            ? <Route path={props.route}>{props.children}</ Route>
            : <Redirect to={props.fallbackRoute}/>
}

export default ProtectedRoute
