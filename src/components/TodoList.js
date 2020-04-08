import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = (props) => {
    return (
        <ul>
            <h1>Todo List</h1>

            {props.items.map(item => {         // Разбиваем ареей и превращаем каждый её объект в отдельный TodoItem, что прописан в соседнем компоненте
                return (
                    <TodoItem
                        key={item.itemId}             // Передаём новому компоненту два пропса - id и title, которые содержаться в каждом объекте array которую мы разбили
                        title={item.title}
                        itemIsEditing={item.itemIsEditing}
                        itemIsDone={item.itemIsDone}
                        itemIsImportant={item.itemIsImportant}
                        handleDelete={() => props.handleDelete(item.itemId)} //Для того что бы заработало удаление надо что бы функция получила ID того элемента который надо удалить.
                        handleItemEditSubmit={(e) => props.handleItemEditSubmit(item.itemId, e)}
                        toggleEditItem={() => props.toggleEditItem(item.itemId)}
                        handleItemEdit={(event) => props.handleItemEdit(event)}
                        onToggleItemIsDone={() => props.onToggleItemIsDone(item.itemId)}
                        onToggleItemIsImportant={() => props.onToggleItemIsImportant(item.itemId)}
                        test={props.test}

                        deleteItemPopUp={() => props.deleteItemPopUp(item.itemId)}
                    />

                )
            })}



            <div className='clearBtn'
            onClick={props.clearList} ><a>Clear the List</a></div>



            {/* <button
                className='btn'
                type='button'
                onClick={props.clearList} >
                Clear the List
            </button> */}

        </ul>
    )
}


export default TodoList