describe('Ticket',function(){
  
  it("deve poder ser vendio apenas para usuarios autenticados",function(){
     var user = new Usuario({name:'Juca',senha:'123'});
     spyOn(user,'autentica');
     expect(ticket.vendidoPara(user)).toHaveBeenCalledWith('123');
  });
  
});