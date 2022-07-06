//push() = Colocar um elemento no array
//pop() = Tirar um elemento do array
//find() = Encontrar um elemento no array 
//filter() = Filtrar elemento dentro do array

const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

console.log(pilotos[0]) //Senna
console.log(pilotos[3])//Hamilton

//acessar o tamanho do array
console.log(pilotos.length)

//iterável = pode ser usado o for of
for(let piloto of pilotos){
    console.log(piloto)
}

//adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

//encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

//deletar um elemento
piloto.splice(1,1)

console.log(pilotos)

