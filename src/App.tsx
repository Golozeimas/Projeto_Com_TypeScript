import {useState} from 'react'


function Main(){
  const [user, setUser] = useState("Olá, visitante!")

  function handleLogin(){
    setUser("Olá, estudante!")
  }

  function handleLogout(){
    setUser("Você saiu da sua conta!")
  }
  return(
    <div>
      <h2>
      {user}
      </h2>
      
      <button onClick={handleLogin}>
        Clique aqui para logar!
      </button>
    
      <button onClick={handleLogout}>
        Clique aqui para sair!
      </button>
      
    </div>
  )
}

export default Main