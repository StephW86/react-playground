// import logo from './logo.svg';
// import Button from './button';
import './App.css';

// function App() {

// }


//// button app
function App() {
  const buttonText = [ 1, 2, 3 ];

  return (
    <div className="App">

      <div>
        {buttonText.map((number) => (
          <Button text={number}>Button {number}</Button>
        ))}
      </div>
    </div>
  );
}

export default App;
