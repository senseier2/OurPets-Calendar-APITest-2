import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from 'react-google-login'

function App() {

  

  return (
    <div>
    <div className="App">
      <h1>Google Calendar API</h1>
    </div>
    <div>
      <GoogleLogin clientId='807282470908-stjl2ss7bkr9plo7kdn3ranhnfo61gcg.apps.googleusercontent.com'
      buttonText='Sign in & Authorize Calendar' 
      onSuccess={responseGoogle}
      onFailure={responseError}
      cookiePolicy={'single_host_origin'}
      //important - this step is for receiving a refresh token on response
      responseType= 'code'
      accessType= 'offline'
      scope= 'openId email profile https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.events'
      />
    </div>
    </div>
  );
}

export default App;
