import {time} from "../Util/Time";

export class Test {
    static async basic(state) {
        await time.sleep(1000);
        state.session.setLoaded(true, 'xiaoming2', 'fds6f78dsa6f78as6f78sa');

        await time.sleep(500);
        state.session.setRegistered(true, 'xiaoming2', 'fds6f78dsa6f78as6f78sa');

        await time.sleep(500);
        state.session.setLoggedIn(true, 'localhost', '7001');

        await time.sleep(500);
        state.message.add(JSON.stringify({
            authenticated_user: "anonymous",
            info: "hello xiaoming!",
            note: "blablabla?"
        }));

        await time.sleep(900);
        state.message.add(JSON.stringify({
            authenticated_user: "anonymous",
            info: "hello xiaoming!",
            note: "blablabla?"
        }));

        await time.sleep(2500);
        state.message.add(JSON.stringify({
            authenticated_user: "anonymous",
            info: "hello xiaoming!",
            note: "blablabla?"
        }));

        await time.sleep(10000);
        state.message.add(JSON.stringify({
            authenticated_user: "anonymous",
            info: "hello xiaoming!",
            note: "blablabla?"
        }));
    }
}
