/**
 * Created by n9571604 on 10/01/2017.
 */
import React, { PropTypes } from 'react';
import { Alert, Button } from 'reactstrap';
import TextInput from '../common/TextInput.jsx';

const LoginForm = ({ username, password, onChange, onFormSubmit, error }) => (
    <form onSubmit={onFormSubmit}>
        <h2 className="text-center">Login</h2>
        <Alert isOpen={error} color="danger">
            <strong>Oh snap!</strong> Your username or password is incorrect! Please try again.
        </Alert>
        <TextInput
            containerClass="form-group"
            label="Username"
            type="text"
            name="username"
            id="form-user"
            className="form-control"
            placeholder="Enter your username."
            value={username}
            onChange={onChange}
            error={error}
        />
        <TextInput
            containerClass="form-group"
            label="Password"
            type="password"
            name="password"
            id="form-pass"
            className="form-control"
            placeholder="Enter your password."
            value={password}
            onChange={onChange}
            error={error}
        />
        <Button className="btn-login-submit" type="submit" color="primary">Login</Button>
    </form>
);

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    error: PropTypes.bool,
};

export default LoginForm;
