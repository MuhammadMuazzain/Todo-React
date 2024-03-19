import styles from './TodoItems.module.css'
import TodoItem from "./TodoItem"
import { TodoItemsContext } from '../store/todo-items-store';
import { useContext } from 'react';



function TodoItems({onDeleteClick}){

    const {todoItems}=useContext(TodoItemsContext);

    return(
    
        <div className={styles['items-container']}>
            {todoItems.map((item)=>(
                <TodoItem key={item.Name} todoName={item.Name} todoDate={item.DueDate} onDeleteClick={onDeleteClick}/>
            ))}
      {/* <TodoItem todoName={'Buy-Milk'} todoDate={'25-10-20102'}/>
      <TodoItem todoName={'Go-to-college'} todoDate={'25-10-2011'}/> */}
      </div>

        )

}

export default TodoItems;