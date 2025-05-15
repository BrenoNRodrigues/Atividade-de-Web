// Atividade 1: Soma dos elementos
function somaArray(array) {
  var soma = 0;
  for (var i = 0; i < array.length; i++) {
    soma = soma + array[i];
  }
  return soma;
}

function calcularSoma() {
  var texto = document.getElementById("inputSoma").value;
  var partes = texto.split(",");
  var numeros = [];

  for (var i = 0; i < partes.length; i++) {
    numeros.push(parseInt(partes[i]));
  }

  var resultado = somaArray(numeros);
  document.getElementById("resultadoSoma").textContent = resultado;
}

// Atividade 2 filtrar números pares
function filtrarNumerosPares(array) {
  var pares = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}

function filtrarPares() {
  var texto = document.getElementById("inputPares").value;
  var partes = texto.split(",");
  var numeros = [];

  for (var i = 0; i < partes.length; i++) {
    numeros.push(parseInt(partes[i]));
  }

  var resultado = filtrarNumerosPares(numeros);
  document.getElementById("resultadoPares").textContent = resultado.toString();
}

// Atividade 3 encontrar maior número
function encontrarMaiorNumero(array) {
  if (array.length === 0) {
    return undefined;
  }

  var maior = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }

  return maior;
}

function encontrarMaior() {
  var texto = document.getElementById("inputMaior").value;
  var partes = texto.split(",");
  var numeros = [];

  for (var i = 0; i < partes.length; i++) {
    numeros.push(parseInt(partes[i]));
  }

  var resultado = encontrarMaiorNumero(numeros);

  if (resultado === undefined) {
    document.getElementById("resultadoMaior").textContent = "Array vazio";
  } else {
    document.getElementById("resultadoMaior").textContent = resultado;
  }
}

// Atividade 4 atendimento por fila
var fila = [];

function mostrarFila() {
  document.getElementById("filaAtual").textContent = fila.toString();
}

function pegarFila() {
  var valor = document.getElementById("numeroPessoa").value;
  var numero = parseInt(valor);

  if (isNaN(numero)) {
    return;
  }

  if (numero > 65) {
    fila.unshift(numero);
  } else {
    fila.push(numero); 
  }

  mostrarFila();
}

function atenderPessoa() {
  if (fila.length > 0) {
    alert("Atendendo pessoa: " + fila[0]);
    fila.shift();
    mostrarFila();
  } else {
    alert("Fila vazia!");
  }
}

function desistir() {
  var valor = document.getElementById("posicaoDesistir").value;
  var pos = parseInt(valor);

  if (pos >= 0 && pos < fila.length) {
    fila.splice(pos, 1);
    mostrarFila();
  } else {
    alert("Posição inválida");
  }
}
