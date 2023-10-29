export default class PopUps {
    constructor() {
        this.inWarn = false;
    }

    showNumber(link) {
        const showNumberContainer = document.createElement('div');
        const linkContainer = document.createElement('div');
        const inputLink = document.createElement('input');
        const btnCopyLink = document.createElement('button');
        const text = document.createElement('h1');

        btnCopyLink.innerText = 'Copiar 🔗';
        text.innerText = 'Link criado com sucesso!'

        inputLink.setAttribute("readonly", "readonly");
        inputLink.value = link;

        showNumberContainer.id = 'showNumberContainer';
        linkContainer.id = 'linkContainer';
        inputLink.id = 'inputLink';

        linkContainer.appendChild(text);
        linkContainer.appendChild(inputLink);
        linkContainer.appendChild(btnCopyLink);
        showNumberContainer.appendChild(linkContainer);

        //Events

        btnCopyLink.addEventListener('click', e => {
            e.preventDefault();
            navigator.clipboard.writeText(link)
                .then(() => {
                    this.warn({textMsg: 'Link Copiado!'});

                    linkContainer.style.animation = 'BtoL 1s';
                    showNumberContainer.style.animation = 'fadeOut 1s';


                    setTimeout(() => {
                        document.body.removeChild(showNumberContainer);
                    }, 900)
                }).catch(e => {
                    this.warn({textMsg: 'Ocorreu um erro desconhecido', borderClor: 'red'});
                    console.log(e);
                });
        });

        document.body.appendChild(showNumberContainer);
    }

    warn({textMsg, borderClor, bgClolor, textColor, time = 3000}) {
        if(this.inWarn) return;
        this.inWarn = true;

        let mainDiv = document.createElement('div');
        let inDiv = document.createElement('div');  
        let text = document.createElement('span');

        mainDiv.id = 'mainDiv';
        inDiv.id = 'inDiv';

        borderClor ? inDiv.style.border = `2px solid ${borderClor}`: false;
        bgClolor ? inDiv.style.backgroundColor = bgClolor : false;
        textColor ? text.style.color = textColor : false;

        inDiv.appendChild(text);
        mainDiv.appendChild(inDiv);

        text.innerText = textMsg;

        document.body.appendChild(mainDiv);

        setTimeout(()=> {
            mainDiv.style.animation = 'sumirCima .5s';

            setTimeout(()=> {
                document.body.removeChild(mainDiv);
                this.inWarn = false;
            }, 480);
        }, time)
    }
}