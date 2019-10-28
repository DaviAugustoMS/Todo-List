import React, { Component} from 'react';

class TodoList extends Component{

  constructor(props){
    super(props);
    this.state={
      tarefa: '',
      items: []
    }

    this.addItem =this.addItem.bind(this);
    this.log = this.log.bind(this);
  }
  addItem(e){
    let state = this.state;
    if(this._tarefaInput.value !== ""){
      let newItem = {
        text: this._tarefaInput.value,
        key: Date.now()
      };
      this.setState({ items: [...state.items, newItem] });
    }

    e.preventDefault();
  }

  log(){
    console.log(this.state.items);
  }
  
  render(){
    return(
      <div>
        <form>
          <input type="text" placeholder="Nova tarefa" name="tarefa" 
            value={this.state.tarefa} 
            onChange={ (ev) => this.setState({tarefa: ev.target.value})}
            ref={ (event) => this._tarefaInput = event}/>
          <button type="submit">
            Adicionar
          </button>
        </form>
        <button onClick={this.log}>
          Log
        </button>
      </div>
    )
  }
}

export default TodoList;