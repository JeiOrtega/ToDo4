import chalk from 'chalk'
import readlineSync from 'readline-sync'

var credito = "Voce escolheu o " + chalk.yellow("credito");
var debito = "Voce escolheu o " + chalk.green("debito");
var si = "Enviaremos o " + chalk.blue("comprovante") + " para o seu endereço de e-mail ";
var no = "Enviaremos o " + chalk.blue("comprovante") +  " fisico con sua producto";

var nome = readlineSync.question("Oi! Qual e seu nome ?");
console.log("Ola meu nome e " + chalk.red(nome));

var primeiraPergunta = readlineSync.question ("Como voce planeja pagar? " + chalk.green("debito") + " ou " + chalk.yellow("credito?"));

if (primeiraPergunta.toLowerCase() == "credito"){
    console.log(credito);
}else{
    console.log(debito);
};

var segundaPergunta = readlineSync.question("Voce deseja receber o " + chalk.blue("comprovante ") + "em seu e-mail " + "si o no?");
if ( segundaPergunta == "si"){
    console.log(si)
}else{
    console.log(no)
};

function resumenDoCompra(){
var resumen = console.log("Seu resumen do pagamento e nome " + chalk.bgBlueBright(nome) + " " + "metodo de pagamento " + chalk.bgBlueBright(primeiraPergunta)
 + " " + "comprovante por e-mail " + chalk.bgBlueBright(segundaPergunta));
return resumen
}
resumenDoCompra(segundaPergunta);
