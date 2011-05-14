describe('Banco',function(){
  
  it("deve taxar suas contas", function(){
     var banco = new Banco();
     var conta = new Conta({saldo:100});

     spyOn(conta,'descontarTarifa');

     banco.addConta(conta);
     banco.taxarContas();
     expect(conta.descontarTarifa).toHaveBeenCalled();
  });
  
});