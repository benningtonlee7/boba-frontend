import './App.css';
import { useEffect, useState } from "react";
import LoginHooks from './components/loginHooks';
import LogoutHooks from './components/logoutHooks';


function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div>
        {signedIn ? (
            <LogoutHooks setSignedIn={setSignedIn}/>

          ):(
              <LoginHooks setSignedIn={setSignedIn}/>

            )}
        </div>
      </header>
    </div>
  );
}

export default App;
