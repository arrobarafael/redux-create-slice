import  React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {incrementar, reduzir} from "./store/contador";
import { fetchToken } from "./store/login";
import { abrir, fechar } from "./store/modal";

function App() {
  const [username, setUserName ] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(event){
    event.preventDefault();
    console.log('submeteu')
    dispatch(fetchToken({username, password}));
  }

  return (
    <div onSubmit = {handleSubmit}>
      <form action="">
        <label htmlFor="username" style = {{display: 'block'}} >Nome</label>
        <input 
          type="text" 
          id = "username"
          value = {username}
          onChange = {({target}) => setUserName(target.value) }
          
          />
        <label htmlFor="password" style = {{display: 'block'}}>Senha</label>
        <input 
          type="text" 
          id = "password"
          value = {password}
          onChange = {({target}) => setPassword(target.value)}
          />
          <button type = "submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
