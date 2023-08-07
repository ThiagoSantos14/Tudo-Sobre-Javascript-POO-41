//Constante Array
const listFamily = ['Thiago', 'Ana', 'Andrea', 'Denilton'];

//Push serve para empurra conteudo no array
listFamily.push('Danielly');

//Unshift serve para empurra conteudo no array, mas só que em primeira posição
listFamily.unshift('Danielly');

//Pop serve para  apagar o último conteúdo do array
listFamily.pop();

//Sort serve para organizar o array
listFamily.sort();

//O console.log serve para mostrar o resultado no terminal
//O indexOf serve para puxar o index = posição, de um determinado conteúdo dentro do array
const indexListFamily = listFamily.indexOf('Thiago');
console.log(indexListFamily);

//Array.isArray serve para verificar se a variável é um array mesmo
const listFamilyTrue = Array.isArray(listFamily);
console.log(listFamilyTrue);

const listNumbers = [4, 14, 20];
console.log(listNumbers);

//Map serve como um loop de repetição dentro do array para procurar algo
const numMultp = listNumbers.map(function(numM){
    return numM * 2;
});
console.log(numMultp);

//Filter serve para retorna para o terminal números específico escolhidos pelo código proposto
const numPar = listNumbers.filter(function(numP){
    return numP % 2 === 0;
});
console.log(numPar);

//Reduce serve para reduzi o array em um só
/*Reduce númerico*/
const numSoma = listNumbers.reduce(function(numS, soma){
    return numS + soma;
}, 0);
console.log(numSoma);

//Reduce com strings
const strSoma = listFamily.reduce(function(strS, total){
    return strS + total;
});
console.log(`${strSoma}`);



//Trabalhando com object
const list1 = {
    firstName1: 'Thiago',
    lastname1: 'Santos',
    age1: 20
}
//Mostrando eles saparadamente
const firstName1 = list1.firstName1;
console.log(firstName1);
const lastname1 = list1.lastname1;
console.log(lastname1);
const age1 = list1.age1;
console.log(age1);

//Adicionando object dentro do array
list1.dog = 'Scooby';
console.log(list1);

//Trabalhando com listas dentro de um object
const list2 = {
    firstName2: 'Ana',
    lastname2: 'Santos',
    age2: 3,
    hobbies2: ['Brincar Boneca', 'Assistir', 'Escrever']
}
//Utilizando um constructor
const {firstName2, lastname2, age2, hobbies2} = list2;
console.log(firstName2, lastname2, age2, hobbies2);

//Mostrar um object especifico dentro do object
const hobby = list2.hobbies2[0];
console.log(hobby);

//Trabalhando com listas dentro de listas
const list3 = [
    {
        id: 1,
        description: 'Estudar Programação',
        isCompleted: true
    },
    {
        id: 2,
        description: 'Assistir',
        isCompleted: true
    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: false
    }
]

//Mostrar container especific
const container = list3[0];
console.log(container);

//Mostrar object especifico
const id1 = list3[0].description;
console.log(id1);

//Convertendo array em Json
const convList3Json = JSON.stringify(list3);
console.log(convList3Json);

//Convertendo Json em Json list
const convJsonList = JSON.parse(convList3Json);
console.log(convJsonList);




//Loop for com contador
for (let numbers = 0; numbers < 11; numbers++){
    console.log(numbers);
}

//Loop for com listas
const list4 = ['Thiago', 'Ana', 'Scooby'];

for (let item = 0; item < list4.length; item++){
    console.log(list4[item]);
}

//foreach
list4.forEach(function(items, index){
    console.log(index, items)
});

//for in
for (itemss in list4){
    console.log(list4[itemss]);
}

//Loop while
let num1 = 0;

while (num1 < 10){
    num1++;
    console.log(num1);
}

//Condicionais
const num2 = 5 + 5 + 10;
const num3 = 10 + 10;

if (num2 === num3){
    console.log('Os dois números são iguais!');
}else{
    console.log('Os dois números são diferentes!');
}

//Trabalhando com operadores logicos
//const name = prompt('Quals eu nome?:');
if (name === 'Thiago' || name === 'thiago' || name === 'THIAGO'){
    alert(`Olá ${name}`);
    //const password = prompt('Qual a senha?:');
    if (password == 14102002){
        alert(`Seja bem vindo ${name}!`);
    }else if (password === 'Sou eu' || password === 'sou eu' || password === 'SOU EU'){
        alert('Acesso 2 permitido!');
    }else{
        alert('Senha inválida!');
    }
}else{
    alert('Usúario inválido?:');
}

//Trabalhando com switch case1
//const carFavorit = prompt('Qua seu carro favorito?:');

//switch (carFavorit){
    //case 'Mercedes':
        //alert('Seu carro favorito é uma Mercedes!');
        //break;
    //case 'Porsche':
        //alert('Seu carro favorito é uma Porsche!');
        //break;
    //case 'Volvo':
        //alert('Seu carro favorito é um Volvo!');
        //break;
//}


//Trabalhando com !! para saber se é true e false
const number1 = 0;
const number2 = null;
const number3 = undefined;
console.log(!!number1);
console.log(!!number2);
console.log(!!number3);

//Convertendo de true para false
console.log(!number1);

//Listas dos dois tipos vão dar sempre verdadeiro 
const list6 = [];
const list7 = {}
console.log(!!list6);
console.log(!!list7);
console.log(!list7);

//Trabalhando com function com return
function sum(a, b = 200) {
    return a + b;
};
const sum1 = sum(100);
console.log(sum1);

//Trabalhando com const => 
const sum2 = (c, d = 300) => {
    return c - d;
};
const sum3 = sum2(150);
console.log(sum3);

//Trabalhando com const, return e =>, todos na mesma linha
const sum4 = (e, f) => e * f;
const sum5 = sum4(6, 50);
console.log(sum5);



//Trabalhando com poo
class Person {
    constructor(name, lastname, age, hobbies) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.hobbies = hobbies;
    }
    
//adicionando metodos  
    fullPerson() {
        console.log(`${this.name} ${this.lastname} tenho ${this.age} anos, gosto de ${this.hobbies} nas horas vagas!`);
    }

    static idioma() {
        console.log('Meu idioma nativo é português!');
    }
}

//Mostrando no console
const person = new Person('Thiago', 'Santos', 20, 'Estudar Programação, Assistir e Ler');
person.fullPerson();
//Static quando o metodo não recebe nenhum parametro
Person.idioma();

//Aplicando a herança
class Person2 extends Person {
    constructor(name, lastname, age, hobbies) {
        super(name, lastname, age, hobbies);
    }

    static idioma2() {
        console.log('Eu sou fluente em inglês e português!');
    }
}
const person2 = new Person2('Ana', 'Santos', 3, 'Brincar, Assistir e Escrever');
person2.fullPerson();
Person2.idioma2();



//Selecionando e mudificaando um id com getElementById
const selectorId = document.getElementById('titulo');
console.log(selectorId);

//Alterar texto com innerText
selectorId.innerText = 'Cadastro';

//Selecionando id com querySelector, tem que especificar o tipo do conteudo
const selectorid = document.querySelector('#email');
console.log(selectorid);

//Alterando texto com textContent
selectorid.textContent = 'Seu Email';

//Selecionando variar id ou class com querySelectorAll
const selectorAll = document.querySelectorAll('input');
console.log(selectorAll);



//Removendo tags com remove
selectorid.remove();

//Removendo Apenas a primeira tag com firstElementChild.remove
const form2 = document.querySelector('.form2');
form2.firstElementChild.remove();

//Removendo Apenas a ultima tag com lastElemenChild.remove
form2.lastElementChild.remove();

//Selecionado um index expecifico com children e  mudando a escrita
form2.children[0].textContent = 'Conteudo';

//Mudando um tag html por completo com innerHTML
form2.firstElementChild.innerHTML = '<h1>CONTEUDO</h1>';

//estilizando tag atraves do javascript com styles.background ou color
form2.style.background = 'purple';
form2.style.color = 'red';



//Declaração de variavel
const form = document.querySelector('.form');
const email = document.querySelector('#emailInput');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');
//Adicionar a class error
const mensError = document.querySelector('.mensError');

//Trabalhando com evento click do addEventListener
submit.addEventListener('click', function(event) {

//Usando o preventDefault para evitar o autocarregamento da página
    event.preventDefault();

//testando o preventDefault com console.log
    console.log('clicked');

//usando o value
    const emailValue = email.value;
    const passwordValue = password.value;

//Contruindo um if para o value
    if (emailValue === '' || passwordValue === '') {
        alert('Preencha todos os campos!');

//Usando o if para trocar os styles do form
        form.style.background = 'red';

//Adicionando mensagem de erro e coloração com classList
        mensError.textContent = 'Preencha todos os campos!';
        mensError.classList = 'error';

//Adicionando um setTimeout na mensagem de erro
        setTimeout(() => {
            mensError.textContent = '';
            mensError.classList = '';
        }, 3000);
        return;
    };

//adicionando tag com javascript
    const infoExtra = document.createElement('p');
    infoExtra.classList = 'textError';
    infoExtra.innerHTML = `${passwordValue}`;

//Criar a tag com appendChild aonde vai ficar   
    form2.appendChild(infoExtra);

//Registrando os email e senha com textContent os items
    form2.firstElementChild.textContent = emailValue;
    form2.lastElementChild.textContent = passwordValue;
});

















