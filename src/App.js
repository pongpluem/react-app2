import logo from './logo.svg';
import Todo from './component/Todo';
import './App.css';

import { useEffect } from "react";

function App() {
  const d = {
    id: 123,
    text: "asdasdasd"
  }

  const data = [
    {
      id: 1,
      text: "Test1",      
    },
    {
      id: 2,
      text: "Test2"
    },
    {
      id: 3,
      text: "Test3"
    },
    {
      id: 4,
      text: "Test4"
    }

  ] 
  
  console.log(data[2])

  const a = data.map(
    (e)=>{
      if(e.id==1)
        return e.id
      else
        return e.text

      return e.id
    }
  )
 
  console.log(a)

  const b =data.filter((e)=>{
    if(e.id==2) 
      return true

    return false;
  })

  console.log(b)

  useEffect(()=>{
    fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json))
    .then(json => console.log("F"))
  }, [])

  return (
    <div>
      <h1>To Do</h1>

      { data.map((e)=>{ return <Todo text= {e.id} ></Todo>}) }

      {/*
      <Todo text="Hello1"></Todo>
      <Todo text="Hello2"></Todo>
      <Todo text="Hello3"></Todo>
      */}
    </div>
  );
}

export default App;
