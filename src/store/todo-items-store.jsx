import { createContext, useReducer } from "react"


export const TodoItemsContext=createContext([])

//Pure Function:
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

//Context+Methods inside of App.jsx(wrapped in a parent component which now encompasses all the children pased to it)
export default function TodoItemsContextProvider({children}) {
    const [todoItems, dispatchTodoItems]=useReducer(todoItemsReducer,[]);

    const addNewItem=(Name , DueDate)=>{
      const newItemAction={
        type: "NEW_ITEM",
        payload: {
          Name : Name,
          DueDate : DueDate
        }
      }
      dispatchTodoItems(newItemAction)
    };
  
    const deleteItem=(itemName) =>{
      const deleteItemAction={
        type: "DELETE_ITEM",
        payload:{
          itemName : itemName
        }
      }
      dispatchTodoItems(deleteItemAction)
    }
    return(
        <TodoItemsContext.Provider value={{
            todoItems : todoItems,
            addNewItem : addNewItem,
            deleteItem : deleteItem
          }}>
            {children}
            </TodoItemsContext.Provider>
    )
}
