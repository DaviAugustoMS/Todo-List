import React, { Component } from 'react';
import TodoList from './component/TodoList';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Lista de Tarefas</h1>
        <TodoList />
      </div>
    )
  }
}

export default App;