import React from 'react'
import PropTypes from 'prop-types'
import {IndexLink, Link, browserHistory} from 'react-router'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
    logout() {
        // destroys the session data
        this.props.route.auth.logout()
        // redirects to login page
        browserHistory.push('/login');
    }

    render() {
        let children = null;
        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth //sends auth instance from route to children
            })
        }

        return (
            <div>
                <IndexLink to="/home">Home</IndexLink>
                {' | '}
                <Link to="/about">About</Link>
                {' | '}
                <Link to="/login">Login</Link>
                {' | '}
                <Link onClick={this.logout.bind(this)}>Logout</Link>
                <br/>
                {children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.element
}

export default App
