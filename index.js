// Uso de classes
import PopUps from "./classes/PopUps.js";
import CriarLink from "./classes/CriarLink.js";

const pu = new PopUps();
const cl = new CriarLink();



// Manipulação de elementos e eventos

const criaLink = document.getElementById('cl');
const mensagemDireta = document.getElementById('dm');

criaLink.addEventListener('click', e => {
    e.stopImmediatePropagation();

    let number = document.getElementById('cnmr').value;
    let messange = document.getElementById('cmsg').value;

    let link = cl.criarLink({number: number, messange: messange});
    

    if(link.status == 'ok'){
        return pu.showNumber(link.link);
    } else if(link.status == 'empity') {
        pu.warn({textMsg: 'Digite pelo menos o número de telefone.', borderClor: 'red'});
    } else if(link.status == 'Nam') {
        pu.warn({textMsg: 'Digite apenas números.', borderClor: 'red'})
    };
});

mensagemDireta.addEventListener('click', e => {
    e.stopPropagation();

    let number = document.getElementById('cnmr').value;
    let messange = document.getElementById('cmsg').value;

    let link = cl.criarLink({number: number, messange: messange});

    if(link.status == 'ok'){
        return window.open(link.link);
    } else if(link.status == 'empity') {
        pu.warn({textMsg: 'Digite pelo menos o número de telefone.', borderClor: 'red'});
    } else if(link.status == 'Nam') {
        pu.warn({textMsg: 'Digite apenas números.', borderClor: 'red'})
    };
});