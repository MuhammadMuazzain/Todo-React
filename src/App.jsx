import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
// import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useReducer} from "react";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";

// initialTodoItem=[{
//   Name: 'hello',
//   DueDate: 'tello'
// }]

const todoItemsReducer=(currTodoItems,action)=>{
  let newTodoItems=currTodoItems;
  if(action.type === "NEW_ITEM"){
    newTodoItems=[
      ...currTodoItems,{
        Name: action.payload.Name,
        DueDate: action.payload.DueDate
      }
    ]
  }
  else if (action.type === "DELETE_ITEM"){
    newTodoItems=currTodoItems.filter((item)=>item.Name !==action.payload.itemName)
    
  }
  return newTodoItems;
};

function App() {

  

  // const addNewItem=(Name , DueDate)=>{
  //   setTodoItems((currValue)=>{
  //     const newTodoItems=[
  //       ...currValue , {
  //         Name:Name,
  //     DueDate:DueDate
  //       }
  //     ]
  //     return newTodoItems;
  //   })
  // }

  // const deleteItem=(itemName)=>{
  //   const newTodoItems=todoItems.filter((item)=>item.Name !==itemName)
  //   setTodoItems(newTodoItems)
  // }
  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <WelcomeMessage 
      // todoItems={todoItems} Isnt required becuase they are getting it from contextAPI
      ></WelcomeMessage>

      <TodoItems
      //  todoItems={todoItems}
        // onDeleteClick={handleDeleteButton} Isnt required becuase they are getting it from contextAPI
        />
    </center>
    </TodoItemsContextProvider>
  );
}
export default App;
