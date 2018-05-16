import React, {Component} from 'react';
import './styles.css';

export default (props)=> {
    return (
        <li className='input-block'>
        <div className='text'>{props.el.value}</div>
        <button className='visible'>update</button>
        <button className='visible' onClick={() => props.handelDelete(props.el.id)}>delete</button>
        </li>
    )
}


