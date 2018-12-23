import React, {Component} from 'react';
import edit from '../assets/edit-24px.svg'

export default class TaskComponent extends Component{
    render(){
        return(
            <div className='task-item'>
                <div className='l-row'>
                   <span className='task-text'>
                       Eu como usuário do sistema ubuntu, devo conhecer melhor o terminal,
                       para ser mais ágil nas minhas ações.
                   </span>
                    <img className='l-icon-position' src={edit} alt="edit task"/>
                </div>
                <div className='button-position l-row'>
                    <button className='button button-ok'>CONCLUIR</button>
                    <button className='button button-attention l-margin-c1'>APAGAR</button>
                </div>
            </div>
        )
    }
}