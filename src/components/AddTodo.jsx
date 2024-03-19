import { useContext, useRef,  } from "react";
// import { useState  } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

export default function AddTodo(
  // { onNewItem }
  ) {
  // const [todoName, setTodoName] = useState();
  // const [dueDate, setDueDate] = useState();

  const {addNewItem}=useContext(TodoItemsContext);
  const todoNameElement=useRef();
  const dueDateElement=useRef();


  // const handleTodoName = (e) => {
  //   setTodoName(e.target.value);
  // };
  // const handleDueDate = (e) => {
  //   setDueDate(e.target.value);
  // };

  const handleAddButtonClicked = (e) => {
    
    e.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    todoNameElement.current.value=''
    dueDateElement.current.value=''
    
  };

  return (
    <div className="container text-centre">
      <form className="kg-row row"
      onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Text Here"
            ref={todoNameElement}
          />
      {/* Using useState : Because we dont want a repaint cycle after every onChange */}
      {/* <input type='text'
                placeholder='Enter The Todo-Name'
                value={name}
                onChange={nameHandler}></input> */}

        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} ></input>
        </div>
        <div className="col-2">
          <button
            className="kg-button btn btn-success"
            
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}
