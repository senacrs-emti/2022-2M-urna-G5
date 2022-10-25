let seuVoto = document.querySelector('#seuVoto');
let cargo = document.querySelector('.tela__cargo h1');
let descricao = document.querySelector('.descricao');
let digitos = document.querySelector('.tela__digitos');

let passoAtual = 0;
let numero = '';
let votoBranco = false;
let corrigir = true;

function comecar(){
    let passo = passos[passoAtual];
    let numeros = '';
    numero = '';
    votoBranco = false;
    corrigir = true;

    for (let i = 0; i < passo.digitos; i++) {
        if(i === 0){
            numeros += '<div class="tela__digito piscando"></div>';   
        } else{
            numeros += '<div class="tela__digito"></div>';
        }
    }

    seuVoto.style.display = 'none';
    cargo.innerHTML = passo.cargo;
    descricao.innerHTML = '';
    digitos.innerHTML = numeros;
}

function atualizaInterface(){
    let passo = passos[passoAtual];  
    let candidato = passo.candidatos.filter((item) => {
        if(item.numero === numero) {
            return true;
        }else{
            return false;
        }
    });
    seuVoto.style.display = 'block';
    
    if(candidato.length > 0){
        candidato = candidato[0];
        descricao.innerHTML = `Nome: ${candidato.nome} <br>Partido: ${candidato.partido}`;
        if(candidato.vice !== undefined){
            descricao.innerHTML += `Vice: ${candidato.vice}`;    
        }
        
        let fotos = '';
        for (const i in candidato.fotos) {
            if(candidato.fotos[i].small){
                fotos += `<div class="descricao__img">
                         <img src="./img/${candidato.fotos[i].url}" alt="">
                         ${candidato.fotos[i].legenda}</div>`;    
            } else{
                fotos += `<div class="descricao__img">
                             <img src="./img/${candidato.fotos[i].url}" alt="">
                             ${candidato.fotos[i].legenda}</div>`;    
            }
        }
        descricao.innerHTML += fotos
    }else{
        descricao.innerHTML = '<div>VOTO NULO</div>';
    }
}

function clicou(n){
    let numeroP = document.querySelector('.tela__digito.piscando');
    if(numeroP !== null) {
        numeroP.innerHTML = n;
        numero += n;

        numeroP.classList.remove('piscando');
        if(numeroP.nextElementSibling !== null){
            numeroP.nextElementSibling.classList.add('piscando');
        } else{
            atualizaInterface();
        }
    }    
}

function branco(){
    if(numero === ''){
        votoBranco = true;
        seuVoto.style.display = 'block';
        digitos.innerHTML = '';
        descricao.innerHTML = '<div class="piscando">Voto em branco</div>';            
    } else{
        alert('O campo precisa estar sem nenhum digito para poder votar branco');
    }
}

function corrige(){
    if(corrigir == true){
        comecar();
    }
}

function confirma(){
    let passo = passos[passoAtual];
    let votoConfirmado = false;
    
    if(votoBranco == true){
        votoConfirmado = true;
    } else if(numero.length === passo.digitos){
        votoConfirmado = true;  
    }
    
    if(votoConfirmado == true){
        passoAtual++;
        if(passos[passoAtual] !== undefined){
            comecar();
        } else{
            corrigir = false;
            document.querySelector('.urna__tela').innerHTML = '<div class="fim"><h1>FIM</h1></div>';   
        }
    }
}

comecar();