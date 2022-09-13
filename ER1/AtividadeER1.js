let listaDePeças = ['Filtro de Ar', 'Roda', 'Pneu'];

listaDePeças.push('Disco de Freio');
listaDePeças.push('Motor');
listaDePeças.push('Amortecedor');



if (listaDePeças.length < 10) {
    console.log('É possível cadastrar mais peças!');
}
else {
    console.log('Não há mais espaço na caixa');
}

let peso = 150;
if (peso < 100) {
    console.log('A peça deve pesar no mínimo 100g.');
}
else {
    console.log('A peça possui o peso adequado.');
}

let nomeDaPeça = 'Disco de Freio';

if (nomeDaPeça.length > 3) {
    console.log('O nome da peça está adequado para cadastro.');
}
else if (nomeDaPeça.length == 0) {
    console.log('O nomde da peça não pode ser vazio.');
}
else {
    console.log('O nome da peça deve ter mais de 3 caracteres, digite o nome adequado');
}