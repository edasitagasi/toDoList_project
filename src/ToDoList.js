import { Component } from 'react';

export class ToDoList extends Component {
    state = {
        userInput:'',
        ToDoList: []
    }

onChangeEvent(e) {
    this.setState({userInput: e});
}

addItem(input) {
    let listArray = this.state.ToDoList;
    listArray.push(input);
    this.setState({ToDoList: listArray, userInput:''})
}

crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

deleteItem() {
    let listArray = this.state.ToDoList;
    listArray = [];
    this.setState({ToDoList: listArray})
}

onFormSubmit(e) {
    e.preventDefault();
}

render() {
    return(
            <form onSubmit={this.onFormSubmit}>
            <div className='container'>
                <input type="text"
                placeholder="Write what you need to do..." 
                onChange={(e) => (this.OnChangeEvent(e.target.value))}
                value={this.state.userInput}/>
            </div>
            <div>
                <button onClick={() => this.addItem(this.state.userInput)} className='btn-add btn'>ADD</button>
            </div>
            <ul>
                {this.state.ToDoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={() => this.deleteItem()} className='btn-delete btn'>DELETE</button>
            </form>
        )
    }
}
