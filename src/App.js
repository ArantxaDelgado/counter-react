import logo from './logo.svg';
import './App.css';

function App() {
  return (


    <div className="App">
      <div className="App text-white">
        <h1 className="text-uppercase">counter</h1>
        <h1 id="counter">0</h1>
        <div className="col">
          <Button text="lower count"/>
          <Button text="add count"/>
        </div>
      </div>
    </div>
  );
}

function CounterBox() {
  // TODO: Devuelveme el JSX esperado
  return 
}

function Button(props) {
  // TODO: Devuelveme un botón configurado según los requisitos
  return (<button className="btn counterBtn prevBtn text-uppercase m-2">{props.text}</button>);
}

export default App;
