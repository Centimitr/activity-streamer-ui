import {observable, action} from "mobx";

export class SessionStore {
    center;

    constructor(center) {
        this.center = center;
    }

    @observable showLoading = true;

    @observable showRegister = false;
    registerSuccess = true;

    @observable showLogIn = false;
    loggedInSuccess = false;
    @observable showLogOut = false;
    @observable reconnectFlag = false;

    @observable hostname = "";
    @observable port = "";
    @observable username = "";
    @observable secret = "";



    @action setLoaded = (needRegister, username, secret) => {
        this.showLoading = false;
        this.username = username;
        this.secret = secret;
        this.showRegister = needRegister;
        if (needRegister) {
            this.showRegister = false;
            this.showLogIn = true;
        }
    };

    @action setRegistered = (success, username, secret) => {
        this.username = username;
        this.secret = secret;
        // this.registerSuccess = success;
        if (success) {
            this.showRegister = false;
            this.showLogIn = true;
        }
    };

    @action setLoggedIn = (success, hostname, port) => {
        this.hostname = hostname;
        this.port = port;
        if (success) {
            this.showLogIn = false;
            this.reconnectFlag = true;
            this.center.message.messages.push({
                type: 'notification',
                content: `Server ${this.hostname}:${this.port} connected.`
            });
        }
    };

    @action logout = () => {
        this.showLogOut = true;
        this.getAgent(agent => agent.logout())
    };

}
