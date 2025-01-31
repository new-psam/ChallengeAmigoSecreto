//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá 
// desenvolver a lógica para resolver o problema.

let amigos = [];


function adicionarAmigos(){
    let amigo = document.querySelector('input').value;
    if (amigo == ''){
        alert('Por favor, insira um nome');
        
    }else{
        amigos.push(amigo);
        console.log(amigos);
        limparCampo();
        
        listaDeAmigos();
    }
    
}

function limparCampo(){
    amigo = document.querySelector('input');
    amigo.value = '';
}



function listaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = " ";
    for (let i = 0; i < amigos.length; i++){

        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
    

}

