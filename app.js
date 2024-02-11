let vogais = ['a', 'e', 'i', 'o', 'u'];
let cifrasImportantes = ['ai', 'enter', 'imes', 'ober', 'ufat'];

function encriptar(){

    let mensagem = document.getElementById('inputText').value;
    let mensagemEncriptada = '';

    for (let i = 0; i < mensagem.length; i++){

        if(!vogais.includes(mensagem[i])){

            mensagemEncriptada += mensagem[i];

        }else{

            aux = '';

            if(mensagem[i] == 'a'){

                aux = 'ai';

            } else if(mensagem[i] == 'e'){

                aux = 'enter';

            } else if(mensagem[i] == 'i'){

                aux = 'imes';

            } else if(mensagem[i] == 'o'){

                aux = 'ober';

            } else{

                aux = 'ufat';

            }

            mensagemEncriptada += aux;

        }

    }

    document.getElementById('textoProcessado').value = mensagemEncriptada;

}

function desencriptar(){

    let cifra = document.getElementById('inputText').value;
    let mensagem = '';

    // uma consonante nunca vai virar uma vogal segundo a formula de encriptação, logo se em uma cifra tem um trecho que começa com uma vogal já sabemos o conteudo que vai seguir essa vogal, que vai ser o restante da cifra em que essa vogal é convertida.

    // porém o usuário pode escrever um texto que não é uma cifra gerada pela função de encriptar, nesse caso se o texto for uma cifra impossível de ser gerada, vamos retornar uma mensagem de erro.
    
    // criar uma função que checa se a cifra é bem formada ou não, e chamar aqui se retornar falso já devolver uma mensagem de erro.

    let i = 0;

    while (i < cifra.length){

        if(!vogais.includes(cifra[i])){

            mensagem += cifra[i];
            i++;

        }else{

            indice = vogais.indexOf(cifra[i]);
            mensagem += vogais[indice];
            i += cifrasImportantes[indice].length;

        }

    }

    document.getElementById('textoProcessado').value = mensagem;

}

function cifraEhBemFormada(cifra){

    // uma cifra é bem formada quando existe uma mensagem que pode gerar ela a partir da aplicação das regras de encriptação
    // uma mensagem pode ser definida como uma sequência de letras minúsculas e espaços
    // as regras de encriptação dizem que uma consonante ou espaços não deve ser modificada, já uma vogal se torna uma palavra que começa com aquela vogal
    // se uma mensagem foi cifrada usando as regras de encriptação, então a sua cifra vai ser uma sequência de espaços, consonates e cifras importantes. (condição necessária)
    // se uma cifra for uma sequência de espaços, consonantes e cifras importantes, então ela  

}