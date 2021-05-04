import React, { Component } from 'react';

class CategoryIcon extends Component {
    render() {

        const { category } = this.props;

        let icon;
        switch (category) {
            case "salads":
                icon = <i className="fas fa-leaf"></i>;
                break;
            case "pizza":
                icon = <i className="fas fa-pizza-slice"></i>;
                break;
            case "meat":
                icon = <i className="fas fa-drumstick-bite"></i>;
                break;
            default:
                icon = <i className="fas fa-utensils"></i>;
                break;
        };

        return (
            <>
                {icon}
            </>
        )
    }
};

export default CategoryIcon;