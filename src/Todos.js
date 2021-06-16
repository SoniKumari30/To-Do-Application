import React from 'react'
import TodoItem from './Item'

class Todos extends React.Component{

  render(){

   return this.props.todos.map((todo)=>{
    		return(<TodoItem key={todo.id} todo={todo} 
    			markComplete={this.props.markComplete}
    			delTodo={thi//s.props.delTodo}
    			/>)
    	}) 
    	
  }
 
}
export default Todos