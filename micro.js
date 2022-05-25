/*
      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
-a Opções não listadas no menu, devem exibir um mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!". */

const menu = {
    1:{NomeDoPrato:'Pipoca', tempoPadrao:10},
    2:{NomeDoPrato:'Macarrão', tempoPadrao:8},
    3:{NomeDoPrato:'Carne', tempoPadrao:15},
    4:{NomeDoPrato:'Feijão', tempoPadrao:12},
    5:{NomeDoPrato:'Brigadeiro', tempoPadrao:8}
}

function microondas(codigo,tempo) {
    const opcao = menu[codigo];


    if (!opcao){
        return console.log('Prato inexistente');
    }

    const tempoInserido = opcao.tempoPadrao;

    if (tempo < tempoInserido){
        console.log('Tempo insuficiente'); 
    }else if (tempo > 2* tempoInserido){
        console.log('terror queimou o rango');
    }else if (tempo > 3* tempoInserido){
        console.log('Comida EXPLUDIO');
    }else {
        console.log('Bom Apetite');
    }
   

    
}

microondas(8,15)