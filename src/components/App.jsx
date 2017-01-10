/**
 * Created by n9571604 on 10/01/2017.
 */
import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

import LoginPage from './login/LoginPage.jsx';
import ShoppingPage from './shopping/ShoppingPage.jsx';

class App extends Component {
    static propTypes = {
        params: PropTypes.shape({
            page: PropTypes.node,
        }),
    };

    state = {
        pageProps: {
            page: '',
            pageContent: (<div />),
        },
        userProps: {
            isLogin: false,
        },
    };

    componentWillMount() {
        const page = this.props.params.page;
        this.setState({
            pageProps: {
                ...this.state.pageProps,
                page,
            },
        }, this.renderComponent);
    }

    componentWillReceiveProps(nextProps) {
        const nextPage = nextProps.params.page;
        if (this.state.pageProps.page !== nextPage) {
            this.setState({
                pageProps: {
                    ...this.state.pageProps,
                    page: nextPage,
                },
            }, this.renderComponent);
        }
    }

    handleUserLogin = (userKey, username) => {
        this.setState({
            userProps: {
                ...this.state.userProps,
                username,
                userKey,
                isLogin: true,
            },
        }, () => {
            const url = 'https://powerful-shore-86001.herokuapp.com/products?';
            $.ajax({
                type: 'GET',
                dataType: 'json',
                crossDomain: true,
                url,
                data: {
                    userId: userKey,
                },
                success: (responseData) => {
                    const { successful } = responseData;
                    if (successful) {
                        const { items } = responseData;
                        this.setState({
                            products: items,
                        }, () => {
                            browserHistory.push('/shopping');
                        });
                    }
                },
                error: (responseData, textStatus) => {
                    throw new Error(textStatus);
                },
            });
        });
    };

    renderComponent = () => {
        const { page } = this.state.pageProps;
        let { pageContent } = this.state.pageProps;
        const { isLogin } = this.state.userProps;
        if (isLogin) {
            switch (page) {
                case 'shopping': {
                    pageContent = (
                        <ShoppingPage products={this.state.products} />
                    );
                    break;
                }
                case 'cart': {
                    pageContent = <h2>Cart!</h2>;
                    break;
                }
                default: {
                    pageContent = <h2>Default!</h2>;
                    break;
                }
            }
        } else {
            switch (page) {
                case '/': {
                    pageContent = (
                        <LoginPage onUserLoginSuccessful={this.handleUserLogin} />
                    );
                    break;
                }
                default: {
                    browserHistory.push('/');
                    pageContent = (
                        <LoginPage onUserLoginSuccessful={this.handleUserLogin} />
                    );
                }
            }
        }
        this.setState({
            pageProps: {
                ...this.state.pageProps,
                pageContent,
            },
        });
    };

    render() {
        return (
            <div className="container">
                <header>
                    <span className="icn-logo"><i className="material-icons">local_grocery_store</i></span>
                </header>
                <div className="main-content">
                    { this.state.pageProps.pageContent }
                </div>
            </div>
        );
    }
}

export default App;
