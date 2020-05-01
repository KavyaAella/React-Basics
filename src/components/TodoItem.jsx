import React, { Component } from 'react';
class TodoItem extends Component {
    state = {  }
    render() { 
        const {id , title} =this.props.todo;
        return ( 
            <div>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                { title}
        <button className ="btn btn-primary btn-sm m-2"onClick = {this.props.delTodo.bind(this,id)} >Delete</button>
                </p>
            </div>
         );
    }



}
 
export default TodoItem;