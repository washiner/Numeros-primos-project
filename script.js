function primo(){
    var numero = parseInt(document.getElementById('in').value);
    var resposta = document.getElementById('resposta');
    var divisores=0;
  
    for(var count=1 ; count<=numero ; count++)
     if(numero % count == 0)
         divisores++;
    
    if(divisores==2)
        resposta.innerHTML='É primo';
    else
        resposta.innerHTML='Não é primo';
  }