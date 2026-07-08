import Aluno from "./components/aluno"
import Header from "./components/header"

function Main(){
  return(
    <div>
      <Header/>
      <Aluno nome="Matheus" idade={20} periodo={4} />
      <Aluno nome="Lucas" idade={17} periodo={3} />
    </div>
  )
}

export default Main