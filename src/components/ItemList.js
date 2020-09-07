import React, { Component } from 'react';
import className from 'classnames';
import './ItemList.css';
import cancel from '../images/cancel.svg';

class ItemList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classImage = className({
            image: true,
            blurImage: !this.props.item.isComlete
        });

        let classTitle = className({
            titleItem: true,
            isComlete: this.props.item.isComlete
        })

        return (
            <div className="ItemList"> 
                <img src={this.props.src} className={classImage} onClick={this.props.onClick}/>
                <span className={classTitle}>{this.props.item.title}</span> 
                <img className='cancleImage' src={cancel} onClick={this.props.clickDelete}></img>
            </div>
        );
    }
}

export default ItemList;