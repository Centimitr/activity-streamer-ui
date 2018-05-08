import {action} from "mobx";
import {observable} from "mobx";

export class MessageStore {

    center;
    @observable messages = [];
    @observable draft = "";
    @observable valid = false;
    pending = [];

    constructor(center) {
        this.center = center;
    }

    @action send = () => {
        const ok = this.checkDraft();
        if (ok) {
            console.log("Send:", this.draft);
            this.center.getAgent(agent => agent.send(this.draft));
            const msg = {
                type: 'message',
                status: 'pending',
                username: this.username,
                content: JSON.stringify(this.draft, null, `  `)
            };
            this.messages.push(msg);
            // this.addPendingMsg(msg);
            this.draft = "";
            this.checkDraft();
        }
    };

    @action checkDraft = () => {
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

    @action formatDraft = () => {
        const ok = this.checkDraft();
        if (ok) {
            // this.draft = JSON.stringify(this.draft, null, ' ');
            console.log(this.draft);
            // this.draft = JSON.stringify(this.draft, null, '\t').slice(1, -1);
            // console.log(this.draft);
        }
    };

    @action clear = () => {
        this.messages = [];
    };

    @action add = message => {
        const m = JSON.parse(message);
        const username = m['authenticated_user'];
        delete m['authenticated_user'];
        const isMe = username === this.username;
        if (isMe) {
            // this.reolvePendingMsg();
            return
        }
        const msg = {
            type: 'message',
            status: 'received',
            username,
            content: JSON.stringify(m, null, `  `)
        };
        this.messages.push(msg);
    };
}