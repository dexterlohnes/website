import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        language: state.global.locales.lang
    }
}

@connect(
    mapStateToProps
)
class NotFoundPage extends Component {

    render() {
        return (
            <div>
                <h4>
                    404 Page Not Found
                </h4>
                <Link to={this.props.language + '/'}> Go back home </Link>
            </div>
        )
    }
}

export default NotFoundPage
