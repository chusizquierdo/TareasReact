import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import { todos } from './todos.json';
import { Component } from 'react';
import TodoForm from './components/TodoForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo= this.handleAddTodo.bind(this);
  }


  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  removeTodo(index){
    console.log(index)
  }

  render() {

    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div class="card-body">
              <p>{todo.description}</p>
            </div>
            <div class="alert alert-primary" role="alert">
              {todo.responsible}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}
                >
                  Borrar
                </button>
            </div>
          </div>
        </div>
      )
    })


    return (
      <div className="App">
        <Navigation titulo="Tareas " numero={this.state.todos.length} />


        <div className="container">
          <div className="row mt-4">
            <TodoForm onAddTodo={this.handleAddTodo}/>
          </div>
        </div>


        <div className="container">
          <div className="row mt-4">
            {todos}

          </div>

        </div>


        <img src={logo} className="App-logo" alt="logo" />

      </div>

    );
  }
}

export default App;
