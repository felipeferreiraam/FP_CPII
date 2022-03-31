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
  
   constructor(nome) {
    this.nome = nome
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

var item1 = new Produto()
item1.nome = "Sapato"
item1.valor = 70

var item2 = new Produto()
item2.nome = "Camisa"
item2.valor = 30

var joaozinho = new Vendedor()
joaozinho.nome = "João"
joaozinho.cargo = vendedor1

var venda1 = new Produto()
var venda2 = new Produto()

joaozinho.vendas.push(item1)
joaozinho.vendas.push(item2)

joaozinho.calcularTotalDeVendas()
joaozinho.calcularComissao()

console.log(joaozinho)
