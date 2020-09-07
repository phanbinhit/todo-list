import React, {Component} from 'react';
import './Input.css'
import Down from '../../images/down-arrow.svg';

class Input extends Component{
    render() {
        return(
            <div className="Input">
                <img src={Down} className="image" onClick={this.props.onClick}/>
                <input
                    type='text'
                    className='input-text'
                    placeholder='What needs to be done?'
                    onKeyUp={this.props.onKeyUp}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default Input;