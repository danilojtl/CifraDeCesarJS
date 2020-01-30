let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var escolha = prompt("Digite 1 para criptografar e 2 para descriptografar:");

function Criptografar() {
    var frase = prompt("Digite o que deseja criptografar!");
    var codigo = prompt("Qual a chave?");
    var chave = parseInt(codigo);
    var saida = [];

    for (var i = 0; i < frase.length; i++) {
        if (frase[i] != ' ') {
            for (var j = 0; j < abc.length; j++) {
                if (frase[i] == abc[j]) {
                    saida[i] = abc[(j + chave) % abc.length];
                    break;
                }
            }
        } else {
            saida[i] = ' ';
        }
    }
    document.write(saida.join(""));
};
function descriptografar() {
    var frase = prompt("Digite o que deseja descriptografar!");
    var codigo = prompt("Qual a chave?");
    var chave = parseInt(codigo);
    var saida = [];

    for (var i = 0; i < frase.length; i++) {
        if (frase[i] != ' ') {
            for (var j = 0; j < abc.length; j++) {
                if (frase[i] == abc[j]) {
                    saida[i] = abc[(j - chave) % abc.length];
                    break;
                }
            }
        } else {
            saida[i] = ' ';
        }
    }
    document.write(saida.join(""));
 };
switch (escolha) {
    case '1':
        Criptografar();
        break;
    case '2':
        descriptografar();
        break;
    default:
        alert("Digite 1 ou 2");
        break;
}

    // parseInt(prompt('Passo da criptografia'));




/*} else if (opcao === 2) {
	let decrypt = prompt('Digite a palavra para descriptografar !!');
	decipher(alphabetMinusculo, alphabetMinusculo, decrypt);
} else {
	alert('Opção inválida :(');
}*/
