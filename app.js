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

            for(let j = 0; j < vogais.length; j++){

                if(cifra[i] == vogais[j]){

                    mensagem += vogais[j];
                    i += cifrasImportantes[j].length;
                    break;

                }

            }

        }

    }

    document.getElementById('textoProcessado').value = mensagem;

}

function substringAEsquerda(s, L){

    // função que checa se s é uma substring a esquerda de um elemento de uma lista L de strings
    // s é uma substring a esquerda de um string S quando s[i] = S[i] para todo i indo de 0 até algum k <= S.lenght
    
    for(let i = 0; i < L.length; i++){

        if(s.length > L[i].length){

            continue;

        }

        // laço para escolha da palavra de indice i em L

        let sEhSubstring = true;

        for(let j = 0; j < s.length; j++){

            // laço para checar se s é substring de uma palavra de indice i

            if(s[j] != L[i][j]){

                sEhSubstring = false;
                break;

            }

        }

        if(sEhSubstring){

            // retorna o indice da palavra em L que s é substring a esquerda de

            return i;

        }

    }

    // retorna -1 se s não é substring a esquerda de nenhuma palavra de L

    return -1;

}