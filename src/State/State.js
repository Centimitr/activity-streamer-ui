import {decorate, observable, action} from "mobx";

const getAgent = (fn) => {
    const agent = window['devbycmagent'];
    if (agent) {
        alert(!!agent);
        fn(agent);
    }
};

class State {
    @observable
    showLoading = true;

    @observable
    showRegister = false;
    registerSuccess = true;

    @observable
    showLogIn = false;
    loggedInSuccess = false;
    @observable
    showLogOut = false;
    @observable
    reconnectFlag = false;

    @observable
    hostname = "";
    @observable
    port = "";
    @observable
    username = "";
    @observable
    secret = "";
    @observable
    messages = [];

    @observable
    draft = "";
    @observable
    valid = false;

    @action
    setLoaded = (needRegister, username, secret) => {
        this.showLoading = false;
        this.username = username;
        this.secret = secret;
        this.showRegister = needRegister;
        if (needRegister) {
            this.showRegister = false;
            this.showLogIn = true;
        }
    };

    @action
    setRegistered = (success, username, secret) => {
        this.username = username;
        this.secret = secret;
        // this.registerSuccess = success;
        if (success) {
            this.showRegister = false;
            this.showLogIn = true;
        }
    };

    @action
    setLoggedIn = (success, hostname, port) => {
        this.hostname = hostname;
        this.port = port;
        if (success) {
            this.showLogIn = false;
            this.reconnectFlag = true;
            this.messages.push({
                type: 'notification',
                content: `Server ${this.hostname}:${this.port} connected.`
            });
        }
    };

    @action
    logout = () => {
        this.showLogOut = true;
        getAgent(agent => agent.logout())
    };

    @action
    check = () => {
        const checkJsonObject = str => {
            if (!str || !str.length) return false;
            try {
                JSON.parse(str.toString());
                return true;
            } catch (e) {
            }
            return false;
        };
        const ok = checkJsonObject(this.draft);
        this.valid = ok;
        return ok;
    };

    @action
    send = () => {
        const ok = this.check();
        if (ok) {
            console.log("Send:", this.draft);
            getAgent(agent => agent.send(this.draft));
            this.draft = "";
            this.check();
        }
    };

    @action
    formatDraft = () => {
        // todo: format
        const ok = this.check();
        if (ok) {
            // this.draft = JSON.stringify(this.draft, null, ' ');
        }
    };

    @action
    clearMessages = () => {
        this.messages = [];
    };

    @action
    addMessage = message => {
        const m = JSON.parse(message);
        const username = m['authenticated_user'];
        delete m['authenticated_user'];
        const msg = {
            type: 'message',
            username,
            content: JSON.stringify(m, null, `  `)
        };
        this.messages.push(msg);
    };
}

// decorate(State, {
//     showLoading: observable,
//     showRegister: observable,
//     registerSuccess: observable,
//     showLogIn: observable,
//     reconnectFlag: observable,
//     firstTimeLogIn: observable,
//     loggedInSuccess: observable,
//     showLogOut: observable,
//     hostname: observable,
//     port: observable,
//     username: observable,
//     secret: observable,
//     messages: observable,
//     draft: observable,
//     valid: observable,
//     setLoaded: action,
//     setRegistered: action,
//     setLoggedIn: action,
//     logout: action,
//     check: action,
//     send: action,
//     formatDraft: action,
//     clearMessages: action,
//     addMessage: action,
// });

const state = new State();
export default state;

window['devbycmstream'] = state;
