import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routes from './routes';
import { Router } from 'react-router';

export default class Root extends Component {
    render() {
        const { history } = this.props;
        return (
            <Router history={history} routes={routes} store={this.props.store} />
        );
    }
}

Root.propTypes = {
    history: PropTypes.object.isRequired
};
