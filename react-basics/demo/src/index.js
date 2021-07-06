import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
/*
const root = document.getElementById('root');
const element = document.createElement('h1');
element.innerText = 'Hi Viz team!';
root.appendChild(element);
*/
const root = document.getElementById('root');
let name = 'Viz Team';
let list = ['Apple', 'Melon', 'Pear'];
const element =
  <>
    <header>
      <h1 apple={4} pear="5">Hi {name}!</h1>
      <h2>Are you ready for React?</h2>
    </header>
    <p>Some Text</p>
    <ul className="fruits">
     { list.map(e => <li>{e}</li>) }
    </ul>
  </>

/*
React.createElement('header', {}, [
  React.createElement('h1', {apple: "4", pear: "5"}, `Hi ${name}!`),
  React.createElement('h2', {}, 'Are....')
  React.createElement('ul', {: 2323}, list.map(e => React.createElement('li', {}, e)))
]);
React,
*/

console.log(element);
/*
function MyPage({name}) {
  let [number, setNumber] = React.useState(0);

  function onMyClick() {
    number++;
    setNumber(number);
    console.log(number)
  }

  return <>
      <h1>This is my page</h1>
      <p>Hello {name}!</p>
      <button onClick={onMyClick}>Plus</button>
      <p>number: {number}</p>
    </>;
}
*/

function TodoApp() {
  let [todos, setTodos] = useState(['Buy milk', 'Drink']);
  let [item, setItem] = useState('');

  function addNew(i) {
    setTodos([...todos, i]);
  }

  function changed(e) {
    setItem(e.target.value);
  }

  function deleteOld(i) {
    todos.splice(i, 1);
    setTodos([...todos]);
  }

  return <>
      <input onChange={changed} name="todo-item" type="text"/>
      <button onClick={() => addNew(item)}>add</button>
      <ol>
        { todos.map((todo, i) =>
          <li key={i}>{todo} <button onClick={() => deleteOld(i)}>-</button></li>) }
      </ol>
    </>;
}

ReactDOM.render(<TodoApp/>, root);
// React.createElement(MyPage, {}, []);
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
