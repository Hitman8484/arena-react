import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Tela from './components/Tela';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button
          bgColor="blue"
          name="Button 1"
        />
        <Button
          bgColor="green"
          name="Button 2"
        />
        <Tela/>
      </header>
    </div>
  );
}

export default App;
