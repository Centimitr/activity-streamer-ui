import React, {Component} from 'react';
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatSendBox from "./ChatSendBox";

import './style/Chat.css';

export default class Chat extends Component {
    render() {
        const state = this.props.state;
        return (
            <div className="Chat">
                <ChatBody message={state.message}/>
                <ChatSendBox message={state.message}/>
                <ChatHeader session={state.session}/>
            </div>
        );
    }
}
