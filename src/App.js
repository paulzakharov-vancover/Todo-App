import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import DeletePopUp from './components/DeletePopUp'
import './App.css'


class App extends Component {
  state = {
    items: [],
    id: 0,
    item: '',
    editItem: false,
    temporaryItemTitleWhileEditing: '',
    userWantsToDeleteItem: false,
    itemIdUserWantsToDelete: {}


  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();


    const newItem = {
      itemId: this.state.id,
      title: this.state.item,
      itemIsImportant: false,
      itemIsDone: false,
      itemIsEditing: false,
      
    }

    const updatedItems = [...this.state.items, newItem]
    this.setState(prevState => ({
      items: updatedItems,
      item: '',
      id: prevState.id + 1,
      editItem: false
    }))

  }

  clearList = () => {
    this.setState({
      items: []
    })
  }

  handleDelete = (itemId) => {
    const filteredItems = this.state.items.filter(item => item.itemId !== itemId)
    this.setState(prevState => ({ 
      items: filteredItems,
      userWantsToDeleteItem: !prevState.userWantsToDeleteItem,
      itemIdUserWantsToDelete: {}

    }))
  }


  toggleEditItem = (itemId) => {

    const idx = this.state.items.findIndex(item => item.itemId === itemId)
    console.log(idx)
    const newItem = {
      ...this.state.items[idx],
      itemIsEditing: !this.state.items[idx].itemIsEditing
    }
    const newArray = [
      ...this.state.items.slice(0, idx),
      newItem,
      ...this.state.items.slice(idx + 1)
    ]
    return (
      this.setState(prevState => ({
        items: newArray,
        temporaryItemTitleWhileEditing: prevState.items[idx].title
      }))
    )
  }

  handleItemEdit = (event) => {
    this.setState({
      temporaryItemTitleWhileEditing: event.target.value
    })
  }

  handleItemEditSubmit = (itemId, e) => {
    e.preventDefault();

    const idx = this.state.items.findIndex(item => item.itemId === itemId)

    const newItem = {
      ...this.state.items[idx],
      title: this.state.temporaryItemTitleWhileEditing,
      itemIsEditing: !this.state.items[idx].itemIsEditing

    }
    const newArray = [
      ...this.state.items.slice(0, idx),
      newItem,
      ...this.state.items.slice(idx + 1)
    ]
    return (
      this.setState({
        items: newArray,
        temporaryItemTitleWhileEditing: ''
      })
    )
  }

  onToggleItemIsDone = (itemId) => {
    const idx = this.state.items.findIndex(item => item.itemId === itemId)
    const newItem = {
      ...this.state.items[idx],
      itemIsDone: !this.state.items[idx].itemIsDone,
      itemIsImportant: !this.state.items[idx].itemIsImportant

    }
    const newArray = [
      ...this.state.items.slice(0, idx),
      newItem,
      ...this.state.items.slice(idx + 1)
    ]
    this.setState({
      items: newArray
    })
  }

  onToggleItemIsImportant = (itemId) => {
    const idx = this.state.items.findIndex(item => item.itemId === itemId)
    const newItem = {
      ...this.state.items[idx],
      itemIsImportant: !this.state.items[idx].itemIsImportant
    }
    const newArray = [
      ...this.state.items.slice(0, idx),
      newItem,
      ...this.state.items.slice(idx + 1)

    ]

    this.setState({
      items: newArray
    })
  }

  deleteItemPopUp = (itemId) => {
    const selectedItem = this.state.items.find(item => item.itemId === itemId)
    const newItem = {
      idx: selectedItem.itemId,
      title: selectedItem.title
    }
    this.setState(prevState => ({
      userWantsToDeleteItem: !prevState.userWantsToDeleteItem,
      itemIdUserWantsToDelete: newItem

    }))
  }

  cancelDeleting = () => {
    this.setState(prevState => ({
      userWantsToDeleteItem: !prevState.userWantsToDeleteItem

    }))
  }
  render() {

    return (
      <Router>
        <Switch>
          <Route path='/Todo-App' exact render={() =>
            <div className='app'>

              {this.state.userWantsToDeleteItem ?
                <DeletePopUp
                  itemIdUserWantsToDelete={this.state.itemIdUserWantsToDelete}
                  handleDelete={this.handleDelete}
                  cancelDeleting={this.cancelDeleting} />
                :
                null}

              <div className='input'>
                <h1>My Todo List</h1>
                <TodoInput

                  item={this.state.item}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                  editItem={this.state.editItem}
                />
              </div>

              <TodoList
                items={this.state.items}
                temporaryItemTitleWhileEditing={this.state.temporaryItemTitleWhileEditing}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleItemEdit={this.handleItemEdit}
                handleItemEditSubmit={this.handleItemEditSubmit}
                toggleEditItem={this.toggleEditItem}
                onToggleItemIsDone={this.onToggleItemIsDone}
                onToggleItemIsImportant={this.onToggleItemIsImportant}

                deleteItemPopUp={this.deleteItemPopUp}

              />
            </div>} />

        </Switch>
      </Router>
    )
  }
}

export default App;
