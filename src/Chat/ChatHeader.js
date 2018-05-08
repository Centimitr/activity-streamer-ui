import React, {Component} from 'react';

import './style/ChatHeader.css';

export default class ChatHeader extends Component {
    render() {
        const session = this.props.session;
        return (
            <header className="ChatHeader">
                <div className="ChatHeader-Info">
                    <div className="ChatHeader-Username">{session.username}</div>
                    <div className="ChatHeader-Secret">Secret: <span>{session.secret}</span></div>
                </div>
                <div className="ChatHeader-Logout" onClick={session.logout}>
                    Logout
                </div>
            </header>
        );
    }
}