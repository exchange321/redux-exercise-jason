/**
 * Created by n9571604 on 10/01/2017.
 */
import React, { Component, PropTypes } from 'react';

class ShoppingPage extends Component {

    static propTypes = {
        products: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })),
    };

    state = {
        products: this.props.products,
    };

    render() {
        return (
            <ul className="itempage-items">
                {
                    this.state.products.map(product => (
                        <li className="itempage-item" key={product.id}>
                            <div className="item">
                                <div className="item-left">
                                    <div className="item-image">
                                        <img className="img-fluid" src={product.img} alt={product.title} />
                                    </div>
                                    <div className="item-title">
                                        {product.title}
                                    </div>
                                    <div className="item-description">
                                        {product.description}
                                    </div>
                                </div>
                                <div className="item-right">
                                    <div className="item-price">${product.price}</div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default ShoppingPage;
