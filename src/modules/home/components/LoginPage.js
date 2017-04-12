import React from 'react'
import noop from '../../common/tools/noop'

const LoginPage = ({ onLogin = noop}) => {
    return (
        <div>
            <h1>Login</h1>
            <button onClick={onLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
