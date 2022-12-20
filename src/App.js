import './App.css';
import { Game } from './Game';
import { Amplify } from 'aws-amplify';
import NavBar from './NavBar';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

// need to add a sign-up button

function App() {

  return (
    <div style={{flexDirection: 'row', textAlign: 'center', alignItems: 'center'}}>
      <NavBar />
      <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', marginTop: 100}}>
        <Game />
      </div>  
    </div>
  );
}

export default App;

