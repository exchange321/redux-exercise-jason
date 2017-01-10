/**
 * Created by n9571604 on 10/01/2017.
 */
import React, { Component, PropTypes } from 'react';
import toastr from 'toastr';
import LoginForm from './LoginForm.jsx';

class LoginPage extends Component {
    static propTypes = {
        onUserLoginSuccessful: PropTypes.func.isRequired,
    };

    state = {
        username: '',
        password: '',
        error: false,
    };

    updateLoginFieldChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value,
        });
    };

    handleLoginFormSubmit = (e) => {
        e.preventDefault();
        $('.btn-login-submit').prop('disabled', true).addClass('loading').text('Processing');
        const url = 'https://powerful-shore-86001.herokuapp.com/users/login?';
        const username = this.state.username;
        const password = this.state.password;
        $.ajax({
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            url,
            data: {
                username,
                password,
            },
            success: (responseData) => {
                const { successful, message } = responseData;
                $('.btn-login-submit').prop('disabled', false).removeClass('loading').text('Login');
                if (successful) {
                    toastr.success(message);
                    this.setState({
                        error: false,
                    });
                    const userKey = responseData.userId;
                    this.props.onUserLoginSuccessful(userKey, username);
                } else {
                    toastr.error(message);
                    this.setState({
                        error: true,
                    });
                }
            },
            error: (textStatus) => {
                throw new Error(textStatus);
            },
        });
    };

    render() {
        return (
            <LoginForm
                username={this.state.username}
                password={this.state.password}
                onChange={this.updateLoginFieldChange}
                onFormSubmit={this.handleLoginFormSubmit}
                error={this.state.error}
            />
        );
    }
}

export default LoginPage;
