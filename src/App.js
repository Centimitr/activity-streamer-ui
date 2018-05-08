import React, {Component} from 'react';
import './style/App.css';
import Chat from "./Chat/Chat";
import Cover from "./Cover";
import {observer} from 'mobx-react';

@observer
class App extends Component {

    render() {
        const state = this.props.state;
        const session = state.session;
        return (
            <div className="App">
                {session.showLoading ?
                    (<div className="App-Startup-Background"/>) : null}
                {session.showLoading ?
                    (<Cover title="Loading..." description=""/>) : null}
                {session.showRegister ?
                    <Cover title="Registering..."
                           description={`Registering an account using username: ${session.username}`}/> : null}
                {session.showLogIn && !session.reconnectFlag ?
                    <Cover title="Logging in..."
                           description={`Logging in with username: ${session.username}\r\n secret: ${session.secret}`}/> : null}
                {session.showLogOut ?
                    <Cover title="Logged out." description=""/> : null}
                <Chat state={state}/>
            </div>
        );
    }
}

export default App;
