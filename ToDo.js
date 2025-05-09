let res = document.getElementById("resultado");
let tarefa = document.getElementById("tarefa");
const localStorageKey = 'to-do-list-k';

function validaDuplicados(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let tarefa = document.getElementById("tarefa").value;
    let existe = values.find(x => x.name == tarefa);
    return existe ? true : false

}

function adicionar(){
    tarefa.style.border = '';
    if(tarefa.value.length == 0){
        tarefa.style.border = '1px solid red';
        alert("Digite algo antes de adicionar!");

    }
    else if(validaDuplicados()){
        tarefa.style.border = '1px solid red';
        alert('Valor já adicionado, por favor, adicione um diferente!');
    }
    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
        values.push({
            name: tarefa.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))// transformar um array em string
        mostrarValores()
        tarefa.value = ''
    }
}

function mostrarValores(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    res.innerHTML = '';
    for(let i = 0; i < values.length; i++){
        res.innerHTML += `<li>${values[i]['name']}<button id = 'btn-delete' onclick='remove("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
      </svg></button></li>`
    }


}


function remove(dado)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    console.log(dado)
    let index = values.findIndex(x => x.name == dado); //Procurar a posição
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))// transformar um array em string
    mostrarValores()
}

function deletar(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    for(let i = 0; i < values.length; i++){
        values.shift(i);
    }
}

mostrarValores()
