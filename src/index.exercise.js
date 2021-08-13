import * as React from 'react';
import ReactDOM from 'react-dom';
import { Logo } from './components/logo';
import { Dialog } from '@reach/dialog';
import LoginForm from 'LoginForm';
import '@reach/dialog/styles.css';

function App() {
  const [openModal, setOpenModal] = React.useState('none');

  const handleLogin = function(formData) {
    console.log('login', formData);
  }

  const handleRegister = function(formData) {
    console.log('register', formData);
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <button onClick={() => setOpenModal('login')}>Login</button>
      <button onClick={() => setOpenModal('register')}>Register</button>
      <Dialog
        isOpen={openModal === 'login'}
        onDismiss={() => setOpenModal('none')}
        aria-label="Login form"
      >
        <p>Login</p>
        <LoginForm onSubmit={handleLogin} buttonText="Login" />
      </Dialog>
      <Dialog
        isOpen={openModal === 'register'}
        onDismiss={() => setOpenModal('none')}
        aria-label="Registration form"
      >
        <p>Register</p>
        <LoginForm onSubmit={handleRegister} buttonText="Register" />
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
