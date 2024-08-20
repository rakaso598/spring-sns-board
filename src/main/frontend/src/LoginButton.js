import React from 'react';

const LoginButton = () => {
    const handleLogin = () => {
        window.location.href = 'http://localhost:8090/login';
    };

    return (
        <button onClick={handleLogin}>
            Login with OAuth2
        </button>
    );
};

export default LoginButton;
