describe('Conta', function(){
  var conta;
  
  describe('Conta Sem Bloqueio',function(){

    beforeEach(function() {
      conta = new Conta({saldo:1000});
    });

    it("deve realizar saques", function(){    
      conta.saca(300);
      expect(conta.saldo).toEqual(700);
    });

    it("deve permitir depositos",function(){
      conta.deposita(200);
      expect(conta.saldo).toEqual(1200);
    });          
  });

  describe('Conta Bloqueada',function(){
    beforeEach(function() {
      conta = new Conta({saldo:1000});
      conta.bloquear();      
    });
    
    it("nao deve realizar saques", function(){    
      conta.saca(300);
      expect(conta.saldo).toEqual(1000);
    });

    it("nao deve permitir depositos",function(){
      conta.deposita(200);
      expect(conta.saldo).toEqual(1000);
    });          
    
  });
  
});