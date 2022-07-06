// FIRST IN FIRST OUT - FIFO - Fila
//Métodos fundamentais
//enqueue() = Adicionar um elemento ao final da fila
//dequeue() = Remover o primeiro elemento a entrar na fila
//size() = Mostrar o tamanho da fila
//front() = pegar o primeiro elemento da fila

//Passo 1: Modelagem
class Queue{
    constructor() {
        this.data = []
    }
    enqueue(item){
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }
     dequeue(){
        const item = this.data.shift() //shift() = retirar o primeiro a entrar na fila
        console.log(`${item} saiu da fila`)
    }
}

//Passo 2: Utilizando
const fila = new Queue()

fila.enqueue('Fulvio')
fila.enqueue('Arthur')
fila.enqueue('João')
fila.dequeue()
fila.dequeue()
fila.dequeue()