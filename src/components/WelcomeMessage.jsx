import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todo-items-store'

export default function () {
  const {todoItems}=useContext(TodoItemsContext);
  return (
    
    <div>
        
        {   todoItems.length===0 &&  <p>Enjoy Your Day Buddy</p>} 
        
    </div>
  )
}
