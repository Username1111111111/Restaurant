import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import cartIcon from './shopping-cart-solid.svg';
import OrderButton from '../order-button/';
import './app-header.scss';

const AppHeader = ({items}) => {
    const total = items.reduce( (accumulator, item) => {
        return accumulator + item.count * item.price
    }, 0);
    return (
        <header className="header">
            <Link to='/' className="header__link" href="#">
                Menu
            </Link>
            <Link to='/cart/' className="header__link" href="#">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
            <OrderButton total={total}/>
        </header>
    )
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

export default connect(mapStateToProps)(AppHeader);