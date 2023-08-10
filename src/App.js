import './App.css';
import { ToDoList } from './ToDoList';
import image from './busy_woman2.jpg';
import imageTwo from './happy_woman.jpg';

function App() {
  return (
    <div className="App">
      <img src={image} width="250px" alt="busy woman" />
      <div className='header'>
        <h1>What do you need to do today?</h1>
        </div>
      <ToDoList />
      <img src={imageTwo} width="250px" alt="happy woman" />
    </div>
  );
}

export default App;
