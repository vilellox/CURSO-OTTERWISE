/* Dado um array de nomes, faça um programa que tenha
como entrada um valor à ser pesquisado e retorne se o nome existe ou não no
array.
Exemplo de Entrada:
["Juliana’, "Pedro’, "Regina’, "João’, "Patrícia’, "Gabriel’, "Carlos’, "Carla’]
"Carla’
Exemplo de Saída:
O nome Carla existe no Array. */

const names = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"]
const name = "Carla"

const hasCarla = names.find((names) => {
    return names === name
  })
  
  console.log(`O nome ${hasCarla} está no Array`)
  