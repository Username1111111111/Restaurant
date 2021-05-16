import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';

class OrderButton extends Component {

    render() {
        const {RestoService} = this.props;
        const {sendOrder} = RestoService;
        const { total } = this.props;
        const { items } = this.props;
        const data = items.map( (item) => ({'title': item.title, 'price': item.price, 'count': item.count}));
        

        return (
            <>
                <button className="header__button" onClick={() => sendOrder({...data, total})}>Checkout</button>
            </>
        )
    }
}

const mapStateToProps = ({items}) => {
    return {
        items
    }
}

export default WithRestoService()(connect(mapStateToProps)(OrderButton));
