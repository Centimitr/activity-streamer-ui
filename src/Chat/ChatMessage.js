import React, {Component} from 'react';

import './style/ChatMessage.css';

export default class ChatMessage extends Component {

    render() {
        const msg = this.props.value;
        switch (msg.type) {
            case 'notification':
                return (<div className="ChatMessage">
                    <div className="ChatMessage-Notification">
                        <div className="ChatMessage-Notification-Content">
                            {msg.content}
                        </div>
                    </div>
                </div>);
            case 'message':
            default:
                return (<div className="ChatMessage">
                    <div className="ChatMessage-Message">
                        <div className="ChatMessage-Header">
                            <span className="ChatMessage-Username">{msg.username}</span>
                            {/*<span>{this.props.time}</span>*/}
                        </div>
                        <div className="ChatMessage-Body">
                            {msg.content}
                        </div>
                    </div>
                </div>);
        }
    }
}
