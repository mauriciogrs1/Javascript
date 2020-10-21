//--------------String---------------
//var nome ="Maurício"
//alert ("Ola "+ nome);
//var frase = "São Paulo é o melhor time do mundo"
//alert(frase.replace("São Paulo", "Brasil")); //Altera a string
//console.log(frase.toLowerCase()); //Modifica texto para caixa pequena

//---------------Numérico----------------
//var n1 = 5;
//var n2 = 3;
//alert(n1 * n2);

//--------------Array---------------------
//var lista = ["Azul", "Amarelo", "Verde"];
//lista.push("Preto"); //Adiciona um novo item
//lista.pop("Azul");
//console.log (lista.length); //Mostra o tamanho do array
//console.log (lista.reverse); //Mostra o Array reverso
//console.log (lista[0]); // Imprime um elemento do array
//console.log (lista.toString()[0]);
//console.log (lista.join("-")); //Adiciona variedades na forma impressa do array como - ou |

/*var fruta = [{nome:"banana", cor:"amarela"},{nome:"uva", cor:"roxo"}];
console.log(fruta[0]);
alert(fruta[1].nome);*/

//------------ Laço Condicional ----------

/*var idade = prompt("Qual sua idade ?");
if (idade >=18){
    alert("Maior de idade")
}else{
    alert("Você é menor de idade!")
}*/

//--------------- Laço Repetição ----------

/*var count;
for (count=0; count <=5; count++){
    console.log(count);
}*/

/*var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1; // Ou count ++;
}*/

//------------- DATA --------------

/*var d = new Date();
alert(d.getMonth()+1); // Apresenta o mês
alert(d.getDay()); // Dias*/

//--------------- FUNCTIONS ----------
/*function soma(n1,n2){
    return n1 + n2;
}
alert(soma(5,10));*/

function botao(){
    alert("Obrigado por Clicar");
    document.getElementById("agradecimento").innerHTML = "Obrigado novamente"; // Altera a informação do text no HTML
}

function mudar(){
    window.open("https://www.youtube.com/"); // REDIRECIONAR PAGINA COM OUTRA ABA
    //window.location.href = "https://www.youtube.com/"  REDIRECIONA PAGINA NA MESMA ABA
}

function trocar(){
    document.getElementById("mouse").innerHTML = "Obrigado";
}
function voltar(){
    document.getElementById("mouse").innerHTML = "Passe o Mouse";
}

/*function load(){
    alert("Pagina Carregada")
}*/

function funcaoChange(elemento){
    console.log(elemento.value);
} // Armazena o valor que o usuario escolheu
