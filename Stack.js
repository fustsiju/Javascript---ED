//LAST IN FIRST OUT - LIFO - Pilha
//Métodos fundamentais
//push() = Adicionar elemento na pilha
//pop() = Remover elemtno do topo da pilha
//peek() = Obter elemento do topo da pilhar
//size() = Mostrar o tamanho da pilha

//Passo 1: Modelagem
class Stack{
    constructor(){
        this.data = []
        this.top = -1
    }
    push(value){
        this.top++
        this.data[this.top] = value
        return this.data
    }
    pop(){
        if(this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }
    peek(){
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

//Passo 2: Utilizando
const stack = new Stack()

//Adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//remover
stack.pop()
console.log(stack.pop())

console.log(stack.peek())