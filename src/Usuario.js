function Usuario(){
};
// versao 1
// Usuario.prototype.sobrenome = function(){
//   return this.nome.split(" ").pop();
// };

// versao 2
// Usuario.prototype.sobrenome = function(){
//   this.nome = this.nome.replace(/[' ']*$/,'');
//   return this.nome.split(" ").pop();
// };      

// versao 3
Usuario.prototype.sobrenome = function(){
  if(this.nome == undefined || this.nome == "")
    throw new Error('Usuario sem nome');
    
  this.nome = this.nome.replace(/[' ']*$/,'');
  return this.nome.split(" ").pop();
};

Usuario.prototype.autentica = function(senha){
  
};