describe('Usuario', function(){

  it("deve exibir o sobrenome", function(){
    var user = new Usuario();
    user.nome = "Joao Marcos";
    expect(user.sobrenome()).toEqual("Marcos");
  });
  
  it("deve exibir o sobrenome mesmo que o nome do usuario possua espacos em branco no final ",function(){
    var user = new Usuario();
    user.nome = "Marcos Velasco   ";
    expect(user.sobrenome()).toEqual("Velasco");    
  });  

  it("deve exibir o sobrenome mesmo que o nome do usuario possua espacos em branco a frente do nome",function(){
    var user = new Usuario();
    user.nome = " Marcio Ferreira";
    expect(user.sobrenome()).toEqual("Ferreira");    
  });  
  
  it("deve lancar excecao se o usuario nao possuir nome",function(){
    var user = new Usuario();
    expect(function(){user.sobrenome();}).toThrow(
      new Error('Usuario sem nome'));
  });
  
  
});