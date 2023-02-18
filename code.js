console.log('JavaScript');
function validaCPF(cpf){

    if(cpf.length !=11){
        return false;
    }
    else{
        var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);
        var soma = 0;
        for (var i =10; i>1 ;i--){
        soma+= numeros.charAt(10-i)*i;
        }   // posiçao da string na lista
        console.log(soma);
        var resultado= (soma % 11) < 2 ? 0 : 11-(soma%11);
        //              if       pergunta  :=senao
        // validaçao do meu primeiro digito
        if (resultado!= digitos.charAt(0)){
            return false;
        }
        soma = 0;
        numeros = cpf.substring(0,10);
        for (var k = 11; k>1; k--){
            soma+=numeros.charAt(11-k)*k;
        }
        resultado=soma % 11 < 2 ? 0 : 11 - (soma % 11);
        // validação do segundo digito
        if(resultado != digitos.charAt(1)){
            return false;
        }
        
        return true;

    }
}
function validacao(){
    console.log('iniciando a validação de CPF');
    document.getElementById('success').style.display='none';
    document.getElementById('error').style.display='none';
    var cpf= document.getElementById('cpf_digitado').value;
    // busca o valor pelo ID
    var resultadoValidacao= validaCPF(cpf);
    if (resultadoValidacao){
        //se for true
        document.getElementById('success').style.display = 'block';
    }else{ //                   grid visivel ao contrario de none
        document.getElementById('error').style.display = 'block';

    }




    console.log(cpf);

}