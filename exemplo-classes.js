class Vendedor {
  nome
  cargo
  vendas = []
  
  comissao = 0
  totalVendas = 0
  
  calcularComissao() {
    this.comissao = this.totalVendas * this.cargo.percentual
  }

  calcularTotalDeVendas() {
    this.vendas.forEach((produto) => {
      this.totalVendas = this.totalVendas + produto.valor
    })
    
    this.totalVendas = this.totalVendas.toFixed(2)
  }
}
  

class Produto {
  nome
  valor
   
   
   constructor(nome, valor) {
    this.nome = nome
    this.valor = valor
  }
  
}

class Cargo {
  nome
  percentual
}

var vendedor1 = new Cargo()
vendedor1.nome = "Vendedor Nível 1"
vendedor1.percentual = 0.05

var vendedor2 = new Cargo()
vendedor2.nome = "Vendedor Nível 2"
vendedor2.percentual = 0.1


var nome = prompt("Digite o nome do produto")
var valor = parseFloat(prompt("Digite o preco"))
var item1 = new Produto (nome, valor)

var nome = prompt("Digite o nome do produto")
var valor = parseFloat(prompt("Digite o preço"))
var item2 = new Produto (nome, valor)
 

var joaozinho = new Vendedor()
joaozinho.nome = "João"
joaozinho.cargo = vendedor1

joaozinho.vendas.push(item1)
joaozinho.vendas.push(item2)

joaozinho.calcularTotalDeVendas()
joaozinho.calcularComissao()

alert ("O total de vendas é: " + joaozinho.totalVendas)

console.log(joaozinho)