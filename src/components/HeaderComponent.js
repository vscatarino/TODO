import React, {Component} from 'react';
import '../style/Header.css';

export default class HeaderComponent extends Component{
    render(){
        return(
            <header className ='header'>
               <span className='header-title'>Catarino's TODO</span>
            </header>
        )
    }
}