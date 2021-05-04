import React, { Component } from 'react';
import WithRestoService from '../hoc/';
import { connect } from 'react-redux';
import { menuLoaded, menuRequested, menuError } from '../../actions';
import Spinner from '../spinner';
import Error from '../error/';

import CategoryIcon from '../category-icon';
import './itemPage.css';

class ItemPage extends Component {

    componentDidMount() {
        if( this.props.menuItems.length === 0) {
            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenuItems()
                .then(res => this.props.menuLoaded(res))
                .catch(() => this.props.menuError());
        }
    }

    render() {
        
        const {loading, menuItems, error } = this.props;
        
        if ( loading) {
            return (
                <div className="item_page">
                    <Spinner />
                </div> 
            )
        }

        if (error) {
            return <Error/>
        }

        const item = menuItems.find(elem => +elem.id === +this.props.match.params.id);
        const { title, url, category, price } = item;

        
        return (
            <div className="item_page">
                <div className="menu__item">
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category} <CategoryIcon category={category} /></span></div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps =  (state) =>{
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested,
    menuError
}

export default WithRestoService()(connect( mapStateToProps, mapDispatchToProps)(ItemPage) );