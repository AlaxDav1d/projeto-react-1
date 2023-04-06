import { useState } from "react";

function App() {
  const[nome,setNome] = useState('')
  const[num1,setNum1] = useState(0)
  const[num2,setNum2] = useState(0)
  function mudaNome(){
    setNome('teste muda nome')
    
  }
  function soma(){
    setNum1(num1 + 1)
  }
  function subtrai(){
    setNum2(num2 - 1)
  }
  return (
  <>
    <button onClick={mudaNome}>muda nome</button>
    <h1>Ola {nome}</h1>

    <button onClick={soma}>clique aqui para somar</button>
    <h1>o valor atual é: {num1}</h1>
   
    <button onClick={subtrai}>clique aqui para voltar</button>
    <h1>o valor atual é: {num2}</h1>
  </>
  )
}

export default App
