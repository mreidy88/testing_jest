import './App.css';
import Todo from './components/todo.js'

function App() {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false, },
    { id: 2, title: 'do laundry', completed: true, },
    { id: 3, title: 'walk dog', completed: false, },
    { id: 4, title: 'cook dinner', completed: true, }
  ];

  return (
    <div className="App">
      {
        todos.map((todo) => {
          return(<Todo todo={todo}/>)
        })
      }
    </div>
  );
}

export default App;
