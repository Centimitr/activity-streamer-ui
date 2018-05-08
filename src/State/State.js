import {MessageStore} from "./Message";
import {SessionStore} from "./Session";


class State {
    message = new MessageStore(this);
    session = new SessionStore(this);
    getAgent = (fn) => {
        const agent = window['devbycmagent'];
        if (agent) {
            alert(!!agent);
            fn(agent);
        }
    };
}

const state = new State();
export default state;

window['devbycmstream'] = state;
