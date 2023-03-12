import logo from './logo.svg';
import Todo from './component/Todo';
import './App.css';

function App() {
  return (
    <div>
      <h1>To Do</h1>
      <Todo text="Hello1"></Todo>
      <Todo text="Hello2"></Todo>
      <Todo text="Hello3"></Todo>
    </div>
  );
}

export default App;
