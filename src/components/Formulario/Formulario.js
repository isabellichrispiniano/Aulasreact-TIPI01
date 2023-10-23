import { useState } from "react";

function Formulario() {
  let [senha , setSenha] = useState();
  let [nome, setNome] = useState();

  function envioSenha(e) {
    e.preventDefault();
    if(nome==="Isabelli" && senha ==="1234"){
        console.log("Login feito com sucesso")
    }else{
        console.log("Usuario ou senha incorretos")
    }

  }
  return (
    <>
      <form action="text">
      <p>Digite o Usuario!</p>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} /> 
        <p>Digite a senha!</p>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
         <button type="submit" onClick={envioSenha}>Entrar</button>
      </form>
    </>
  );
}
export default Formulario;
