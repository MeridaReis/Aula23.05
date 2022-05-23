var MeusAlunos= document.querySelector ('#primeiro-paciente');


var nome = MeusAluno.querySelector ('.info-nome');
console.log(nome)

var valorPeso= MeusAluno.querySelector('.info-peso');
var peso= parseInt(valorpeso.textContent);
console.log (peso)

var valorAltura = MeusAluno.querySelector('.info-altura');
var altura= parseInt(valorAltura.textContent);
console.log(altura)

var valorgordura = MeusAluno.querySelector ('.info-gordura');
var gordura = parseInt(valorgordura.textContent);
console.log (gordura)

var valorIMC= parseInt(peso+altura+gordura)/3
console.log(valorIMC)

var ValorIMC= aluno.querySelector('.info-imc');
subIMC.textContent= valorIMC

