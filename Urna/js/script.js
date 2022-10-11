let seuVoto = document.querySelector('#seuVoto');
let cargo = document.querySelector('.tela__cargo h1');
let digitos = document.querySelector('.tela__digitos');
let numero = '';
let passoAtual = 0;
let descricao = document.querySelector('.descricao');
let telaCargo = document.querySelector('.tela__cargo')
let votoBranco = document.querySelector('.tela--branco')

function comecar(){
    let passo = passos[passoAtual];
    let digito = '';
    for(let i = 0; i < passo.digitos; i++){
        if(i === 0){
            digito += '<div class="tela__digito piscando"></div>';
        } else {
            digito += '<div class="tela__digito"></div>'
        }
    }
    seuVoto.style.display = 'none';
    cargo.innerHTML = passo.titulo;
    digitos.innerHTML = digito;
}

function atualizaInterface(){
    let passo = passos[passoAtual];  
    let digito = digitos.textContent
    let candidato = passo.candidatos.filter((item) => {
        if(item.numero === digito) {
            return true;
        }else{
            return false;
        }
    });
    console.log(passo)
    console.log(digito)
    seuVoto.style.display = 'block';
    
    if(candidato.length > 0){
        candidato = candidato[0];
        descricao.innerHTML = `<h1>Nome: ${candidato.nome} <br>Partido: ${candidato.partido}<br></h1>`;
        if(candidato.vice !== undefined){
            descricao.innerHTML += `Vice: ${candidato.vice}`;    
        }
        let fotosHtml = '';
        for (const i in candidato.fotos) {
                        fotosHtml += `<div class="candidato"> 
                             <img src="img/${candidato.fotos[i].url}" alt=""><p>
                             ${candidato.fotos[i].legenda}</p></div>`;    
        }
        descricao.innerHTML += fotosHtml;
    }else{
        descricao.innerHTML = '<div class="piscando"><p><br>Voto Nulo</p></div>';
    }
    telaCargo.style.marginTop = 0;
}

function branco(){
    if(digito === ''){
        votoBranco = true;
        seuVoto.style.display = 'block';
        digito.innerHTML = '';
        descricao.innerHTML = '<div class="pisca">VOTO EM BRANCO</div>';            
    } else{
        alert('Para votar em BRANCO \no campo de voto deve estar vazio.\n'+ 
            'Aperte CORRIGE para apagar o campo de voto.');
    }
}


function clicou(n){
    let numeroP = document.querySelector('.tela__digito.piscando');
    if(numeroP !== null) {
        numeroP.innerHTML = n;

        numeroP.classList.remove('piscando');
        if(numeroP.nextElementSibling !== null){
            numeroP.nextElementSibling.classList.add('piscando');
        } else{
            atualizaInterface();
        }
    }    
}


comecar()

