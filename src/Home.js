import React from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import BlackBack from './components/BlackBack'

export default function Home(props) {
    return (
        <div className='app'>

             {props.userWantsToDeleteItem ?
              <BlackBack
                itemIdUserWantsToDelete={props.itemIdUserWantsToDelete}
                handleDelete={props.handleDelete}
                cancelDeleting={props.cancelDeleting} />
              :
              null}

            <div className='input'>
              <h1>My Todo List</h1>
              <TodoInput

                item={props.item}
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
                editItem={props.editItem}
              />
            </div>

            <TodoList
              items={props.items}
              test={props.test}
              clearList={props.clearList}
              handleDelete={props.handleDelete}
              handleItemEdit={props.handleItemEdit}
              handleItemEditSubmit={props.handleItemEditSubmit}
              toggleEditItem={props.toggleEditItem}
              onToggleItemIsDone={props.onToggleItemIsDone}
              onToggleItemIsImportant={props.onToggleItemIsImportant}

              deleteItemPopUp={props.deleteItemPopUp}

            />
          </div>
    )
}
