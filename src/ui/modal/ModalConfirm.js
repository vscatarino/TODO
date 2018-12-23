import React, {Component} from 'react';

export default class ModalConfirm extends Component{
    render(){
        return(
            <div className={`modal ${this.props.modalIsOpen ? '' : 'l-hide'}`}>
                <div className='modal-content'>
                    <h1 className='modal-title'>{this.props.title}</h1>

                    <span className='modal-text'>{this.props.content}</span>

                    <div className='button-position l-row'>
                        <button
                            className='button button-ok'>
                            CONTINUAR
                        </button>
                        <button
                            className='button button-attention l-margin-c1'
                            onClick={this.props.onClose}>
                            CANCELAR
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}