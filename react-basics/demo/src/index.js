'use strict';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

class TestLifecycle extends React.Component {
  constructor(props) {
    super(props);
    console.log('creation');
    this.state = {date: new Date()};
    this.intervalId = null;
  }

  render() {
    console.log('render', document?.querySelector('h1')?.innerHTML);
    return <h1>{ this.state.date.getTime() }</h1>;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({date: new Date()});
      console.log('tick');
    }, 1000);
    console.log('mount');
  }

  componentDidUpdate() {
    console.log('update', document.querySelector('h1').innerHTML);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}

const DeleteTimer = () => {
  const [renderTimer, setRenderTimer] = useState(true);



  return (
    <>
      { renderTimer ? <TestLifecycle /> : <h1>Deleted</h1> }
      <button onClick={() => setRenderTimer(false)}>Delete</button>
    </>
  )
}

ReactDOM.render(
  <DeleteTimer />,
  document.getElementById('root')
);
/*
const ChangeName = () => {
  const [nameList, setNameList] = useState(['Noemi', 'Nurbiike', 'Misi',  'Tojas']);

  const messUpNames = () => {
    setNameList(['Csabika', 'Gizi', 'Noemi', 'Lacuska', 'Tibbor']);
  };

  return <>
    <GreetList nameList={nameList}/>
    <button onClick={messUpNames}>Mess up names</button>
  </>;
};

const GreetList = ({nameList}) => {
  return (
    <ul>
      { nameList.map(name => <li key={name}><Greet name={name} /></li> ) }
    </ul>
  );
};

const Greet = ({name}) => {
  return (
    <h1>Hello {name}!</h1>
  );
};

ReactDOM.render(
  <ChangeName />,
  document.getElementById('root')
);
*/
/*
const myName = 'Tojas';
const appLang = 'it';

const HELLO_DICT = {
  'en': 'Hello',
  'it': 'Ciao',
};

const Greet = ({lang, name}) => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(1);
  console.log(lang, name);

  const handleClick = (e) => {
    console.log(e);
    setNumber((prevNumber) => prevNumber + 1);
    setNumber2((prevNumber) => prevNumber * 2);
  };

  return (
    <h1 data-lang={lang} onClick={handleClick}>
      { HELLO_DICT[lang] } { name }! { number } { number2 }
    </h1>
    // React.createElement('h1', {}, `${ HELLO_DICT[props.lang] } ${ prop.name }!
  );
};

class Greet2 extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { number: 0 };
  }

  handleClick(e) {
    console.log(e);
    this.setState((prevState) => ({ number: prevState.number + 1 }));
    console.log(this);
  }

  render() {
    const { lang, name } = this.props;
    return (
      <h1 data-lang={lang} onClick={() => this.handleClick()}>
        { HELLO_DICT[lang] } { name }! { this.state.number }
      </h1>
    );
    // React.createElement('h1', {onClick: this.handleClick}, `${ HELLO_DICT[props.lang] } ${ prop.name }!
  }
}
*/
/*
let o = {name: 'Jozsi', handleClick() {console.log(this.name)}};

let handle = o.handleClick;
handle();

setTimeout(o.handleClick, 100);
*/
    /*
ReactDOM.render(
  <Greet name={myName} lang={appLang} />,
  document.getElementById('root')
);

console.log(<Greet2 name={myName} lang={'en'} />);
*/
//React.createElement(Greet, { name: myName, lang: 'en' }, []);


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
/*
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
*/
/*
React.createElement('header', {}, [
  React.createElement('h1', {apple: "4", pear: "5"}, `Hi ${name}!`),
  React.createElement('h2', {}, 'Are....')
  React.createElement('ul', {: 2323}, list.map(e => React.createElement('li', {}, e)))
]);
React,
*/

//console.log(element);
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
/*
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
*/
// React.createElement(MyPage, {}, []);
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
