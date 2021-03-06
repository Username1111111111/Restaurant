import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {removeFromCart, itemMinus, itemPlus} from '../../actions';

const CartTable = ({items, removeFromCart, itemMinus, itemPlus}) => {
    return (
        <>
            <div className="cart__title">Your order:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-counter-wrap">
                                    <button onClick={() => itemMinus(id)} className="cart__item-button">−</button>
                                    <div className="cart__item-count">{count}</div>
                                    <button onClick={() => itemPlus(id)} className="cart__item-button">+</button>
                                </div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => removeFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchToProps =  {
    removeFromCart,
    itemMinus, 
    itemPlus
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);