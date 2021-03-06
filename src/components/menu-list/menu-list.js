import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
import Spinner from '../spinner';
import Error from '../error/';



import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();
        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            .catch( () => this.props.menuError());
    }

    render() {
        const { menuItems, loading, error, addedToCart } = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/> 
        }

        const items = menuItems.map(menuItem => {
            return (
                <MenuListItem 
                    key={menuItem.id} 
                    menuItem={menuItem}
                    onAddToCart={() => addedToCart(menuItem.id)}/>
            )
        });

        return (
            <View items={items} />
        )
    }
};

class View extends Component {
    render() {
        return (
            <ul className="menu__list">
                {this.props.items}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps =  {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart
};

export default  WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));