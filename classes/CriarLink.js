import PopUps from "./PopUps.js";
export default class CriarLink {
    constructor() {
        this.pu = new PopUps();
    }

    criarLink({number, messange}) {
        if(!number) return {link: false, status: 'empity'};
       
        if(!(/^[0-9]+$/.test(number))) return {link: false, status: 'Nam'};

        let link = `https://api.whatsapp.com/send?phone=55${number}&text=${messange ? messange : ''}`.replace(' ', '%20');

        return {link: link, status: 'ok'};
    }
}