import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import BlackBack from './components/BlackBack'
// import Home from './Home'
import './App.css'


class App extends Component {
  state = {
    items: [],
    id: 0,
    item: '',
    editItem: false,
    test: '',
    userWantsToDeleteItem: false,
    itemIdUserWantsToDelete: {}


  }

  handleChange = (event) => {          // То что пишем в инпуте - записываем в стейт item
    this.setState({
      item: event.target.value
    })
  }

  handleSubmit = (event) => {           // По нажатию кнопки сабмит
    event.preventDefault();             // ОТменяем обновление страницы


    const newItem = {                   // Создаем новую константу NewItem
      itemId: this.state.id,                // Записываем в неё айди
      title: this.state.item,             // и значение Title которое вравно item которое раньше передали через инпут
      itemIsImportant: false,
      itemIsDone: false,
      itemIsEditing: false,
      temporaryItemTitle: this.state.item
    }

    const updatedItems = [...this.state.items, newItem]        //Нам нельзя мутировать текущий стейт, надо заменить его на новый с обновленными данными. ДЛя этого создаем новый массим со старыми данными
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
    const filteredItems = this.state.items.filter(item => item.itemId !== itemId) //Создаем новый маассив равный массиву из стейта но после фильтрации. В фильтре мы указываем что надо
    // Оставить только те item которые не содержат id равный тому что мы получили на входе в функцию
    this.setState({
      items: filteredItems,
      userWantsToDeleteItem: !this.state.userWantsToDeleteItem,
      itemIdUserWantsToDelete: {}

    })
  }

  toggleEditItem = (itemId) => {

    const idx = this.state.items.findIndex(item => item.itemId === itemId)
    console.log(idx)
    const newItem = {
      ...this.state.items[idx],
      itemIsEditing: !this.state.items[idx].itemIsEditing
    }
    console.log(newItem)
    const newArray = [
      ...this.state.items.slice(0, idx),
      newItem,
      ...this.state.items.slice(idx + 1)
    ]
    return (
      this.setState({
        items: newArray,
        test: this.state.items[idx].title
      })
    )
  }

  handleItemEdit = (event) => {
    this.setState({
      test: event.target.value
    })
  }

  handleItemEditSubmit = (itemId, e) => {
    e.preventDefault();

    const idx = this.state.items.findIndex(item => item.itemId === itemId)

    const newItem = {
      ...this.state.items[idx],
      title: this.state.test,
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
        test: ''
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
            <BlackBack
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
            test={this.state.test}
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
