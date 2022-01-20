/* Dado um array de entrada com o nome e as notas de avaliações dos alunos,
retorne uma lista com os alunos que tiraram 0 em todas as provas.
Exemplo de Entrada:
[
{nome: Zezinho,
notas: [0]
]
*/

const alunos = [
        
        {nome: "Zezinho", notas: [0, 0]},
        {nome: "Maria", notas: [10, 8]},
        {nome: "Enzo", notas: [0, 0]},
        {nome: "Ana", notas: [0, 0]}
    
]

const zerados = alunos.filter((aluno) => 
    aluno.notas.every((nota) => 
    nota === 0
     
    )
)

console.log(zerados)