import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList';
import Input from './components/Input/Input';
import Filter from './components/Filter/Filter';
import checkDone from './images/check-done.svg';
import check from './images/check.svg';
import shortid from 'shortid';

const ALL = 0;
const ACTIVE= 1;
const COMPLETED = 2;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: '',
      currentFilter: ALL,
      countItemLeft: function() {
        return this.state.todos.filter((item) => !item.isComlete).length
      },
      todos: [
        {id:shortid.generate(), title: 'Toán', isComlete: false},
        {id:shortid.generate(), title: 'Anh', isComlete: false},
        {id:shortid.generate(), title: 'Văn', isComlete: false},
      ]
    }

    this.complete = this.complete.bind(this);
    this.enterItem = this.enterItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.completeAll = this.completeAll.bind(this);
    this.clearComleted = this.clearComleted.bind(this);
    this.countFilter = this.countFilter.bind(this);
    this.delete = this.delete.bind(this);
  }

  complete(item) {
    return (event) => {
      const todos = this.state.todos;
      let index = todos.indexOf(item);
      this.setState({
        todos: [
          ...todos.slice(0, index),
          {id: item.id, title: item.title, isComlete: !item.isComlete},
          ...todos.slice(index + 1)
        ]
      })
    }
  }

  delete(item) {
    return (event) => {
      const todos = this.state.todos;
      let index = todos.indexOf(item);
      this.setState({
        todos: [
          ...todos.slice(0, index),
          ...todos.slice(index + 1)
        ]
      })
    }
  }

  enterItem(event) {
    if (event.keyCode === 13) {
      if(event.target.value.trim().length === 0) {
        this.setState({
          inputTitle: event.target.value
        })
      } else {
        this.setState({
          todos: [
            ...this.state.todos,
            {id: shortid.generate(), title:event.target.value, isComlete: false }
          ],
          inputTitle: ''
        })
      }
    }
  }

  onChange(event) {
    this.setState({
      inputTitle: event.target.value
    })
  }

  checkSame(todos) {
    for (let i = 0; i < todos.length - 1; i++) {
      if (todos[i].isComlete !== todos[i+1].isComlete) {
        return false;
      }
    }

    return true;
  }

  completeAll() {
    if (this.checkSame(this.state.todos)) {
      this.setState({
        todos: this.state.todos.map((item, index) => {
          item.isComlete = !item.isComlete;
          return item;
        })
      })
    } else {
      this.setState({
        todos: this.state.todos.map((item, index) => {
          if (!item.isComlete) {
            item.isComlete = true
          }
          return item;
        })
      })
    }
  }

  clearComleted() {
    this.setState({
      todos: this.state.todos.filter((item, index) => {
        return !item.isComlete
      })
    })
  }

  countFilter(event) {
    let value = parseInt(event.target.value);
    const todos = this.state.todos;
    switch(value) {
      case 1:
        this.setState({
          todos: todos.filter((item) => !item.isComlete)
        });
        break;
      case 2:
        this.setState({
          todos: todos.filter((item) => item.isComlete)
        });
        break;
      default:
        this.setState({
          todos: todos
        });
        break;
    } 
  }

  render() {
    return (
      <div className="App">
        <Input 
          onKeyUp={this.enterItem} 
          value={this.state.inputTitle} 
          onChange={this.onChange}
          onClick={this.completeAll}
        />
        <div className="main">
          {
            this.state.todos.map((item, index) => {
              return (
                  <ItemList 
                    key={index} 
                    item={item} 
                    onClick={this.complete(item)} 
                    src={item.isComlete ? checkDone : check}
                    isComlete={item.isComlete}
                    clickDelete={this.delete(item)}
                  />
              )
            })
          }
        </div>
        <div className='footer'>
          <span>{this.state.countItemLeft.bind(this)()} item left</span>
          <div>
            <Filter onClick={this.countFilter} buttonValue="All" dataFilter={ALL}></Filter>
            <Filter onClick={this.countFilter} buttonValue="Active" dataFilter={ACTIVE}></Filter>
            <Filter onClick={this.countFilter} buttonValue="Completed" dataFilter={COMPLETED}></Filter>
          </div>
          <button className="buttonClearCompleted" onClick={this.clearComleted}>Clear completed</button>
        </div>
      </div>
    )
  }
}

export default App;
