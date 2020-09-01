import React, { Component } from 'react';

class ItemList extends Component {
    render() {
        return (
            <div className="ItemList">
                <h2>{this.props.title}</h2> 
            </div>
        );
    }
}

export default ItemList;