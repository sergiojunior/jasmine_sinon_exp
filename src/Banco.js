function Banco(){
  this.contas = [];
  this.tarifa = 10;
}

Banco.prototype.addConta = function(conta){
  var idx = this.contas.length;
  this.contas[idx] = conta;
};

Banco.prototype.taxarContas = function(){
  for( var i in this.contas ){    
    this.contas[i].descontarTarifa(10);
  }
};