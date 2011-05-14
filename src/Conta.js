function Conta(args){
  this.saldo = args.saldo;
  this.bloqueada = false;
};

Conta.prototype.saca = function(valor){
  if(!this.bloqueada) return this.saldo -= valor;
};

Conta.prototype.deposita = function(valor){
  if(!this.bloqueada) return this.saldo += valor;
};

Conta.prototype.bloquear = function(){
  return this.bloqueada = true;
};

Conta.prototype.desBloquear = function(){
  return this.bloqueada = false;
};

Conta.prototype.descontarTarifa = function(tarifa){
  return this.saca(tarifa);
};
