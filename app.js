
function encriptar(){

    let mensagem = document.getElementById('inputText').value;
    let mensagemEncriptada = '';
    let vogais = ['a', 'e', 'i', 'o', 'u'];

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
    let cifrasImportantes = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let vogais = ['a', 'e', 'i', 'o', 'u'];
    let mensagem = '';
    let aux = '';

    for (let i = 0; i < cifra.length; i++){

        aux += cifra[i];
        let indice = substringAEsquerda(aux, cifrasImportantes);

        if(indice == -1){

            // aux não é substring a esquerda de nenhuma cifra importante, portanto pode se descartar seu valor após passalo para a mensagem

            mensagem += aux;
            aux = '';

        }else if(cifrasImportantes.includes(aux)){

            // aux além de ser um substring a esquerda de uma cifra importante é igual a uma cifra importante, logo devemos passar a vogal que está relacionada a essa cifra importante para a mensagem e descartar o valor da variável aux

            mensagem += vogais[indice];
            aux = '';

        }

    }

    mensagem += aux;

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