const opcoes = {
    //propriedade:valor
    1 : {nomeDoPrato: 'pipoca', padrao: 10},
    2 : {nomeDoPrato: 'macarrao', padrao: 8},
    3 : {nomeDoPrato: 'carne', padrao: 15},
    4 : {nomeDoPrato: 'feijao', padrao: 12},
    5 : {nomeDoPrato: 'brigadeiro', padrao: 8}
}

function menuMicroondas(codigo, tempo) {
    
    const opcao = opcoes[codigo];
    const tempoOpcao = opcao.padrao;

    
    if(!opcao){
        return console.log(`Opcao inexistente`);
    }

    if(tempo < tempoOpcao){
        console.log(`Tempo insuficiente`);
    } else if(tempo >= tempoOpcao*2 && tempo <= tempoOpcao*3){
        console.log(`Comida queimou`);
    } else if(tempo >= tempoOpcao*3){
        console.log(`KABUUM!`);
    } else{
        console.log(`Pronto, pronto. Bom apetite!`);
    }

    

}

menuMicroondas(5, 90);