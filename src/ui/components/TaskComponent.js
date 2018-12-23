import React, {Component} from 'react';
import edit from '../../assets/edit-24px.svg'
import ModalConfirm from '../modal/ModalConfirm'

export default class TaskComponent extends Component{
    constructor(props){
        super(props);
        this.state = { modalIsOpen:false, msgContent:'', modalTitle:''}
    }

    doneTask(e){
        e.preventDefault();
        this.setState({modalIsOpen:true, msgContent:'Tem certeza que deseja concluir a tarefa?',
                        modalTitle:'Concluir Tarefa'})
    }

    eraseTask(e){
        e.preventDefault();
        this.setState({modalIsOpen:true, msgContent:'Tem certeza que deseja apagar a tarefa?',
                        modalTitle:'Apagar Tarefa'})
    }

    closeModal(){
        this.setState({modalIsOpen:false, msgContent:''})
    }

    render(){
        return(
            <div className='task-item'>
                <div className='l-row'>
                   <span className='task-text'>
                       Eu como usuário do sistema ubuntu, devo conhecer melhor o terminal,
                       para ser mais ágil nas minhas ações.
                   </span>
                    <img className='l-icon-position l-pointer' src={edit} alt="edit task"/>
                </div>
                <div className='button-position l-row'>
                    <button className='button button-ok' onClick={this.doneTask.bind(this)}>CONCLUIR</button>
                    <button className='button button-attention l-margin-c1' onClick={this.eraseTask.bind(this)}>APAGAR</button>
                </div>
                <ModalConfirm
                    modalIsOpen={this.state.modalIsOpen}
                    content={this.state.msgContent}
                    title={this.state.modalTitle}
                    onClose = {this.closeModal.bind(this)}
                />
            </div>
        )
    }
}