import React, {Component} from 'react';
import './Filter.css'

class Filter extends Component {
    render() {
        return(
            <button className='buttonFilter' onClick={this.props.onClick} value={this.props.dataFilter}>{this.props.buttonValue}</button>
        )
    }
}

export default Filter