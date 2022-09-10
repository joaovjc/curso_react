import './App.css';
import { FormLoginComponent } from "./component/Form";
import { FooterComponent } from "./component/Footer"
import { Logo } from "./component/Logo"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <FormLoginComponent />
        <FooterComponent/>
      </header>
    </div>
  );
}

export default App;
