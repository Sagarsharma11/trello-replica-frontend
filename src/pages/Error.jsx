import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/login');
    };

    return (
        <div className="error-page">
            <h1 className="text-danger">Oops! Something went wrong.</h1>
            <p>Please try again later or go back to the login page.</p>
            <button className="btn btn-primary" onClick={handleRedirect}>
                Go to Login
            </button>
        </div>
    );
};

export default ErrorPage;
