import { useState } from "react"

export default function Main2(){
    
    const [aluno, setAluno] = useState("Nenhum aluno registrado!")
    const [contador, setContador] = useState(0)
    const [numberInput, setNumberInput] = useState(0)
    const [idade, setIdade] = useState(0)
    const [input, setInput] = useState("")
    
    function mostrarNome(){
        if(input === '' || input === null){
            return
        }
          setAluno(input)
          setIdade(numberInput)
          setContador(contador + 1)
    }
    
    return (
        <div>
            <input 
            type="text" 
            placeholder="Coloque seu nome!"
            id="nome"
            value={input}
            onChange={(e)=> setInput(e.target.value)}
            />

            <input 
            type="number"
            placeholder="Digite um número"
            id="idade"
            value={numberInput}
            onChange={(e) => setNumberInput(Number(e.target.value))}
            />

            <br />
            <br />
            
            <button 
            onClick={mostrarNome}>
                Mostrar nome
            </button>

            <div>
                <h3>Bem vindo, {aluno}</h3>
            </div>

            <div>
                <h4>Idade do usuário: {idade}</h4>
            </div>
            <h2>
                Contador: <p>{contador}</p>
            </h2>
        </div>
    )
}