import { Login } from "./pages/home";
import './App.css';
import Logo from './images/logob.png';
import Logoban from './images/logoban.png';
function App() {
  return (
    <div className="App">
      <div className="leftlogo">
        <img src={Logo} alt="logo" id="imglogo" />
      </div>
      <div className="rightlogo"><div className="resimg"> <img src={Logoban} alt="logo" id="imglg" /></div><Login /></div>
    </div>
    
  );
}

export default App;
