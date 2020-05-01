import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos'

class App extends Component{
  state ={
    todos:[
      {
          id :1,
          title: 'Breakfast',
          completed:false
      },
      {
          id :2,
          title: 'Lunch',
          completed:false
      },
      {
          id :3,
          title: 'Dinner',
          completed:false
      }
  ]
  }

  markComplete =(id)=>{
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  } 
    delTodo =(id)=>{
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]

      })
    }
  
render() {
  return (
    <div>
      <Header/>
      <Todos todos ={this.state.todos} 
      markComplete ={this.markComplete} 
      delTodo = {this.delTodo}/>
    </div>
  )
  }
}
export default App;
