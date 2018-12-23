import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import TaskComponent from './components/TaskComponent'
import './style/reset.css';
import './style/layout.css';
import './style/Task.css';
import './style/Button.css';

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
