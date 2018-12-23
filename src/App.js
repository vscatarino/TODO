import React, { Component } from 'react';
import HeaderComponent from './ui/components/HeaderComponent';
import TaskComponent from './ui/components/TaskComponent'
import './style/reset.css';
import './style/layout.css';
import './style/Task.css';
import './style/Button.css';
import './style/Modal.css';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
          <div className='task-field'>
              <TaskComponent/>
              <TaskComponent/>
          </div>

      </div>
    );
  }
}

export default App;
