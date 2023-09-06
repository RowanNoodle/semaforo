const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');

let contador =1;

setInterval( () =>{
if (contador <=1){

    amarelo.classList.add ('amarelo-ativo');
} else if (contador ===2){
    amarelo.classList.remove('amarelo-ativo')
    vermelho.classList.add ('vermelho-ativo')
}
else if (contador ===3){
    verde.classList.add('verde-ativo')
    vermelho.classList.remove ('vermelho-ativo')
}
else if (contador ===4){
    verde.classList.remove ('verde-ativo')
    contador =0;
}
contador +=1;
}, 1000);