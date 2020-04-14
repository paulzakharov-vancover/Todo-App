import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = (props) => {
    return (
        <ul>
            <h1>Todo List</h1>

            {props.items.map(item => {        
                return (
                    <TodoItem
                        key={item.itemId}           
                        title={item.title}
                        itemIsEditing={item.itemIsEditing}
                        itemIsDone={item.itemIsDone}
                        itemIsImportant={item.itemIsImportant}
                        handleDelete={() => props.handleDelete(item.itemId)} 
                        handleItemEditSubmit={(e) => props.handleItemEditSubmit(item.itemId, e)}
                        toggleEditItem={() => props.toggleEditItem(item.itemId)}
                        handleItemEdit={(event) => props.handleItemEdit(event)}
                        onToggleItemIsDone={() => props.onToggleItemIsDone(item.itemId)}
                        onToggleItemIsImportant={() => props.onToggleItemIsImportant(item.itemId)}
                        temporaryItemTitleWhileEditing={props.temporaryItemTitleWhileEditing}

                        deleteItemPopUp={() => props.deleteItemPopUp(item.itemId)}
                    />

                )
            })}

            {props.items.length > 0 ? <div className='clearBtn'
            onClick={props.clearList} ><a>Clear the List</a></div> : null }



        </ul>
    )
}


export default TodoList