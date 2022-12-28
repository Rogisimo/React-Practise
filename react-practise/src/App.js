import './App.css';
import {useState, useEffect} from 'react'

const Person = (props) =>{
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  const name = "Spongebob"
  const [counter, setCounter] = useState(0); //React hook

  //On load runs code, dependancy array runs code when its changed
  //React hook
  useEffect(() => {
    console.log("Changed to " + counter)
  }, [counter])

  return (
    <div className="App">
      {/* Ternary operator inject*/}
      <p>Ternary operator inject</p>
      <h1>Hello {name}!</h1>
      {name ? (<><h1>{name}</h1></>) : (<><h1>test</h1> <h2>There is no name</h2></>)}
      <br></br>
      {/* Components, props */}
      <p>Components, props</p>
      <Person name={"John"} lastName={"City"} age={30}/>
      <Person name={"Spongebob"} lastName={"BikiniBottom"} age={12}/>
      {/* React hooks, events. NEVER CHANGE THE STATE MANUALLY */}
      <p>React state, events</p>
      <button onClick={() => {setCounter((prevCount) => prevCount-1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter((prevCount) => prevCount+1)}}>+</button>
    </div>
  );
}

export default App;
