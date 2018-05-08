import React, {Component} from 'react';

import './style/ChatToolBar.css';
import {observer} from "mobx-react";

@observer
class ChatToolBar extends Component {

    render() {
        const message = this.props.message;
        return (
            <div className="ChatToolBar">
                <div className="ChatToolBar-Row">
                    <div>
                        <button onClick={message.clear}>Clear Screen</button>
                        <button onClick={message.formatDraft}>Format</button>
                    </div>
                    <div>
                        <button className={message.valid ? 'accept' : 'refuse'} onClick={message.send}>Send</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatToolBar;