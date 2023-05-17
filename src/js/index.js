
const Dias = document.getElementById('dias');
const Horas = document.getElementById('horas');
const Minutos = document.getElementById('minutos');
const Segundos = document.getElementById('segundos');

var dataFinal = new Date("2023-07-01").getTime();

var intervalo = setInterval(function() {

    var dataAtual = new Date().getTime();

    var diferenca = dataFinal - dataAtual;

    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  Dias.innerHTML = dias
  Horas.innerHTML = horas
  Minutos.innerHTML = minutos
  Segundos.innerHTML = segundos

}, 1000);