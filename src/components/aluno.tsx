import '../style/aluno.css'

interface AlunosProps{
    nome: string,
    idade: number,
    periodo: number
}

function Aluno({nome, idade, periodo}: AlunosProps){
    return(
            <div className="alunos">
            <h3>Nome do aluno: {nome}</h3>
            <h3>Idade do aluno: {idade}</h3>
            <h3>Periodo do aluno: {periodo}</h3>
            </div>     
    )
}

export default Aluno