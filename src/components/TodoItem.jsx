import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
export default function TodoItem({todoName , todoDate}){

  const {deleteItem}=useContext(TodoItemsContext);

    return(

        <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          {/* <button type="button" class="btn btn-danger kg-button"> */}

          <button type="button" className='kg-button btn btn-danger' onClick={()=>deleteItem(todoName)}>

          <MdOutlineDelete />
          </button>
        </div>
      </div>
      </div>
    )
}