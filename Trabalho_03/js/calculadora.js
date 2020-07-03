// Função que mostra os valores escolhidos no painel
function button(novo_valor) {
    // Guarda o primeiro valor inserido no painel
    var valor = document.formulario.painel.value;
    // Concatena o primeiro valor com o próximo no painel
    var conta = document.formulario.painel.value = valor + novo_valor;
}


// Função igual para calcular o resultado
function resultado(){
    // Guarda a conta
    var calculo = document.formulario.painel.value;
//    guarda_conta(calculo);
    // Realiza o Cálculo e armazena na variável
    var result  = eval(calculo);
//    guarda_resultado(result);
    // Limpa o painel
    document.formulario.painel.value.clear;
    
    // Mostra o resultado no painel
    document.formulario.painel.value = result;

    document.historico.documento.value = calculo + " " + "=" + " " + result;
}


//function guarda_conta(calculo){
//    var conta = calculo;
//    return conta;
//}
//
//
//function guarda_resultado(result){
//    var valor = result;
//        return valor;
//}
