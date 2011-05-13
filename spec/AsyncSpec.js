describe("Testes Assicronos", function(){

  it("waits", function() {
    var a = 1;
    runs(function() {
      setTimeout(function() {
        a++;
        console.debug("somando");
      }, 1000);
    });
    waits(1500);
    runs(function() {
       expect(a).toEqual(2);
    });
  });

  it("waitsFor", function() {
    var a = 1;
    var somado = false;
    setTimeout(function() {
      a++;
      console.debug("somando");
      somado = true;
    }, 1000);

    waitsFor(function() {
      return somado;
    }, "aguardando soma", 10000);

    runs(function() {
       expect(a).toEqual(2);
    });
  });
  
});