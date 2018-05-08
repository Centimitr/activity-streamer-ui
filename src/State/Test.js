import {time} from "../Util/Time";

export class Test {
    async run(stream) {
        await time.Sleep(1000);
        stream.setLoaded(true, 'xiaoming2', 'fds6f78dsa6f78as6f78sa');
        await time.Sleep(500);
        stream.setRegistered(true, 'xiaoming2', 'fds6f78dsa6f78as6f78sa');
        await time.Sleep(500);
        stream.setLoggedIn(true);
        await time.Sleep(500);
        stream.addMessage(JSON.stringify({
            authenticated_user: "anonymous",
            info: "hello xiaoming!",
            note: "blablabla?"
        }));
        await time.Sleep(500);
        stream.addMessage(JSON.stringify({
            authenticated_user: "anonymous",
            info: "hello xiaoming!",
            note: "blablabla?"
        }));
        await time.Sleep(500);
        stream.addMessage(JSON.stringify({
            authenticated_user: "anonymous",
            info: "hello xiaoming!",
            note: "blablabla?"
        }));
        await time.Sleep(500);
        stream.addMessage(JSON.stringify({
            authenticated_user: "anonymous",
            info: "hello xiaoming!",
            note: "blablabla?"
        }));
    }
}
