import React, { Component } from 'react';
import MenuListItem from '../menu-list-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError} from '../../actions';
import Spinner from '../spinner';
import Error from '../error/';
// import {Link} from 'react-router-dom';


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
        const { menuItems, loading, error } = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <Error/>
        }

        const items = menuItems.map(menuItem => {
            return (
                // <Link to={`/${menuItem.id}`}></Link>
                    <MenuListItem key={menuItem.id} menuItem={menuItem}/>
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
    menuError
};

export default  WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));