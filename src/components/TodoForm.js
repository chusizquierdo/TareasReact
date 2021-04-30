import { Component } from "react";


class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput=this.handleInput.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInput(e) {        
        const {value, name} =e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    handleSubmit(e){
       e.preventDefault();
       this.props.onAddTodo(this.state)
       console.log('Enviando datos');
    }    

    render() {
        return (
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input
                            type=""
                            name="title"
                            className="form-control"
                            placeholder="Title"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Responsible"
                            onChange={this.handleInput}
                        />
                        <div className="form-group">
                            <input
                                type="text"
                                name="description"
                                className="form-control"
                                placeholder="Description"
                                onChange={this.handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="priority"
                                className="form-control"
                                onChange={this.handleInput}
                            >
                                
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Aceptar</button>
                    </div>
                </form>
            </div>
        )
    }

}


export default TodoForm;