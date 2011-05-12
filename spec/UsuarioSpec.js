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
  
  it("waits", function() {
    var a = 1;
    runs(function() {
      setTimeout(function() {
        a++;
        console.debug("somando")
      }, 1000);
    });
    waits(1500);
    runs(function() {
       expect(a).toEqual(2);
    });
  })

  it("waitsFor", function() {
    var a = 1;
    var somado = false;
    setTimeout(function() {
      a++;
      console.debug("somando")
      somado = true;
    }, 1000);

    waitsFor(function() {
      return somado;
    }, "aguardando soma", 10000);

    runs(function() {
       expect(a).toEqual(2);
    });
  })





  
});